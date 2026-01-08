import { NextRequest, NextResponse } from 'next/server';
export declare function approvePOST(req: NextRequest): Promise<NextResponse<{
    error: string;
}> | NextResponse<{
    result: string;
    paymentId: any;
    piServer: any;
}>>;
