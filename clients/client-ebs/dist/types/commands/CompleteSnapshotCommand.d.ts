import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import { CompleteSnapshotRequest, CompleteSnapshotResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CompleteSnapshotCommandInput extends CompleteSnapshotRequest {
}
export interface CompleteSnapshotCommandOutput extends CompleteSnapshotResponse, __MetadataBearer {
}
/**
 * <p>Seals and completes the snapshot after all of the required blocks of data have been
 *             written to it. Completing the snapshot changes the status to <code>completed</code>. You
 *             cannot write new blocks to a snapshot after it has been completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, CompleteSnapshotCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, CompleteSnapshotCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new CompleteSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteSnapshotCommandInput} for command's `input` shape.
 * @see {@link CompleteSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CompleteSnapshotCommand extends $Command<CompleteSnapshotCommandInput, CompleteSnapshotCommandOutput, EBSClientResolvedConfig> {
    readonly input: CompleteSnapshotCommandInput;
    constructor(input: CompleteSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EBSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CompleteSnapshotCommandInput, CompleteSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
