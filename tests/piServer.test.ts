import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getPiServerConfig, postToPiServer } from '../lib/piServer';

describe('getPiServerConfig', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should return config with default values when only API_KEY is set', () => {
    process.env.PI_API_KEY = 'test-api-key';
    delete process.env.PI_API_URL_BASE;
    delete process.env.PI_API_VERSION;
    delete process.env.PI_API_CONTROLLER;

    const config = getPiServerConfig();

    expect(config.apiUrlBase).toBe('https://api.minepi.com');
    expect(config.apiVersion).toBe('v2');
    expect(config.apiController).toBe('payments');
    expect(config.apiKey).toBe('test-api-key');
  });

  it('should return config with custom values when all env vars are set', () => {
    process.env.PI_API_URL_BASE = 'https://custom.api.com';
    process.env.PI_API_VERSION = 'v3';
    process.env.PI_API_CONTROLLER = 'transactions';
    process.env.PI_API_KEY = 'custom-key';

    const config = getPiServerConfig();

    expect(config.apiUrlBase).toBe('https://custom.api.com');
    expect(config.apiVersion).toBe('v3');
    expect(config.apiController).toBe('transactions');
    expect(config.apiKey).toBe('custom-key');
  });

  it('should throw error when API_KEY is missing', () => {
    delete process.env.PI_API_KEY;
    delete process.env.PI_API_URL_BASE;
    delete process.env.PI_API_VERSION;
    delete process.env.PI_API_CONTROLLER;

    expect(() => getPiServerConfig()).toThrow('Missing PiServer configuration');
  });
});

describe('postToPiServer', () => {
  const originalEnv = process.env;

  const mockEnv = {
    PI_API_URL_BASE: 'https://mock.api.com',
    PI_API_VERSION: 'v2',
    PI_API_CONTROLLER: 'payments',
    PI_API_KEY: 'mock-api-key',
  };

  beforeEach(() => {
    process.env = { ...originalEnv, ...mockEnv };
    global.fetch = vi.fn();
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.restoreAllMocks();
  });

  it('should make POST request with correct URL and headers', async () => {
    const mockResponse = { success: true };
    vi.mocked(global.fetch).mockResolvedValue({
      ok: true,
      status: 200,
      text: () => Promise.resolve(JSON.stringify(mockResponse)),
    } as Response);

    const result = await postToPiServer('approve', 'payment-123', { data: 'test' });

    expect(global.fetch).toHaveBeenCalledWith(
      'https://mock.api.com/v2/payments/payment-123/approve',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ data: 'test' }),
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
          'Authorization': 'Key mock-api-key',
        }),
      })
    );
    expect(result).toEqual(mockResponse);
  });

  it('should call logOk callback on success', async () => {
    const mockResponse = { success: true };
    vi.mocked(global.fetch).mockResolvedValue({
      ok: true,
      status: 200,
      text: () => Promise.resolve(JSON.stringify(mockResponse)),
    } as Response);

    const logOk = vi.fn();
    await postToPiServer('complete', 'payment-456', {}, { logOk });

    expect(logOk).toHaveBeenCalledWith(
      'Pi server POST complete succeeded (200)',
      mockResponse
    );
  });

  it('should throw and call logFail on HTTP error', async () => {
    const errorResponse = { error: 'Payment not found' };
    vi.mocked(global.fetch).mockResolvedValue({
      ok: false,
      status: 404,
      text: () => Promise.resolve(JSON.stringify(errorResponse)),
    } as Response);

    const logFail = vi.fn();

    await expect(
      postToPiServer('approve', 'invalid-id', {}, { logFail })
    ).rejects.toThrow('PiServer call failed: HTTP 404');

    expect(logFail).toHaveBeenCalledWith(
      'Pi server POST approve failed with status 404',
      errorResponse,
      404
    );
  });

  it('should throw on network error', async () => {
    vi.mocked(global.fetch).mockRejectedValue(new Error('Network failure'));

    const logFail = vi.fn();

    await expect(
      postToPiServer('approve', 'payment-123', {}, { logFail })
    ).rejects.toThrow('Network error for PiServer');

    expect(logFail).toHaveBeenCalled();
  });

  it('should throw on invalid JSON response', async () => {
    vi.mocked(global.fetch).mockResolvedValue({
      ok: true,
      status: 200,
      text: () => Promise.resolve('not valid json'),
    } as Response);

    const logFail = vi.fn();

    await expect(
      postToPiServer('approve', 'payment-123', {}, { logFail })
    ).rejects.toThrow('Invalid JSON from PiServer');

    expect(logFail).toHaveBeenCalled();
  });

  it('should include custom headers when provided', async () => {
    vi.mocked(global.fetch).mockResolvedValue({
      ok: true,
      status: 200,
      text: () => Promise.resolve('{}'),
    } as Response);

    await postToPiServer('approve', 'payment-123', {}, {
      header: { 'X-Custom-Header': 'custom-value' },
    });

    expect(global.fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: expect.objectContaining({
          'X-Custom-Header': 'custom-value',
        }),
      })
    );
  });
});
