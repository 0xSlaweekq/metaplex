import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { StringPublicKey } from '../../../utils';
import { RequestCardToRedeemParams } from '..';
interface Params extends RequestCardToRedeemParams {
    packSetKey: PublicKey;
    editionKey: StringPublicKey;
    editionMint: StringPublicKey;
    voucherKey: StringPublicKey;
    tokenAccount?: StringPublicKey;
    wallet: PublicKey;
}
export declare function requestCardToRedeem({ index, packSetKey, editionKey, editionMint, voucherKey, tokenAccount, wallet, }: Params): Promise<TransactionInstruction>;
export {};
//# sourceMappingURL=requestCardToRedeem.d.ts.map