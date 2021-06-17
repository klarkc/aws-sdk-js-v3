import { Decoder, Hash, HashConstructor, SourceData } from "@aws-sdk/types";
/**
 * A Hash that will calculate a Sha256 tree hash.
 */
export declare class TreeHash implements Hash {
    private readonly Sha256;
    private readonly fromUtf8;
    private buffer?;
    private collectedHashDigests;
    /**
     * Initializes a TreeHash.
     * @param Sha256 A Sha256 hash constructor.
     */
    constructor(Sha256: HashConstructor, fromUtf8: Decoder);
    /**
     * Generates Sha256 hashes from 1 MiB chunks of the
     * internal buffer.
     * Will set the internal buffer to any bytes remaining
     * that is less than 1 MiB.
     */
    private hashBuffer;
    /**
     * Updates the tree hash with byte data.
     * @param chunk Byte data to apply to the tree hash.
     */
    update(data: SourceData): void;
    /**
     * Calculates the digest for the tree hash.
     */
    digest(): Promise<Uint8Array>;
    /**
     * Converts source data into a Uint8Array.
     * @param data Data to convert to a Uint8Array.
     */
    private convertToBuffer;
}
