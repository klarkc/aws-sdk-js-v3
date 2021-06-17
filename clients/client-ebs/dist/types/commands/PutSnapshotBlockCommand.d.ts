/// <reference types="node" />
import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import { PutSnapshotBlockRequest, PutSnapshotBlockResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
declare type PutSnapshotBlockCommandInputType = Omit<PutSnapshotBlockRequest, "BlockData"> & {
    /**
     * For *`PutSnapshotBlockRequest["BlockData"]`*, see {@link PutSnapshotBlockRequest.BlockData}.
     */
    BlockData: PutSnapshotBlockRequest["BlockData"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `PutSnapshotBlockRequest` interface. There are more parameters than `BlockData` defined in {@link PutSnapshotBlockRequest}
 */
export interface PutSnapshotBlockCommandInput extends PutSnapshotBlockCommandInputType {
}
export interface PutSnapshotBlockCommandOutput extends PutSnapshotBlockResponse, __MetadataBearer {
}
/**
 * <p>Writes a block of data to a snapshot. If the specified block contains
 *             data, the existing data is overwritten. The target snapshot must be in the
 *                 <code>pending</code> state.</p>
 *     	    <p>Data written to a snapshot must be aligned with 512-byte sectors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, PutSnapshotBlockCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, PutSnapshotBlockCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new PutSnapshotBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSnapshotBlockCommandInput} for command's `input` shape.
 * @see {@link PutSnapshotBlockCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutSnapshotBlockCommand extends $Command<PutSnapshotBlockCommandInput, PutSnapshotBlockCommandOutput, EBSClientResolvedConfig> {
    readonly input: PutSnapshotBlockCommandInput;
    constructor(input: PutSnapshotBlockCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EBSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutSnapshotBlockCommandInput, PutSnapshotBlockCommandOutput>;
    private serialize;
    private deserialize;
}
export {};
