import { NextRequest, NextResponse } from 'next/server';
export declare function errorPOST(req: NextRequest): Promise<NextResponse<{
    error: string;
}> | NextResponse<{
    result: string;
    paymentId: any;
    piServer: any;
}>>;
