import { NextRequest, NextResponse } from 'next/server';
export declare function cancelPOST(req: NextRequest): Promise<NextResponse<{
    error: string;
}> | NextResponse<{
    result: string;
    paymentId: any;
    piServer: any;
}>>;
