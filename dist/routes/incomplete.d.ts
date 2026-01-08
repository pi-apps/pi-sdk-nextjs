import { NextRequest, NextResponse } from 'next/server';
export declare function incompletePOST(req: NextRequest): Promise<NextResponse<{
    error: string;
}> | NextResponse<{
    result: "complete";
    paymentId: any;
    piServer: any;
}>>;
