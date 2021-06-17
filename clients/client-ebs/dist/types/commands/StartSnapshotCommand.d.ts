import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import { StartSnapshotRequest, StartSnapshotResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartSnapshotCommandInput extends StartSnapshotRequest {
}
export interface StartSnapshotCommandOutput extends StartSnapshotResponse, __MetadataBearer {
}
/**
 * <p>Creates a new Amazon EBS snapshot. The new snapshot enters the <code>pending</code> state
 *             after the request completes. </p>
 *         <p>After creating the snapshot, use <a href="https://docs.aws.amazon.com/ebs/latest/APIReference/API_PutSnapshotBlock.html"> PutSnapshotBlock</a> to
 *             write blocks of data to the snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, StartSnapshotCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, StartSnapshotCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new StartSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSnapshotCommandInput} for command's `input` shape.
 * @see {@link StartSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartSnapshotCommand extends $Command<StartSnapshotCommandInput, StartSnapshotCommandOutput, EBSClientResolvedConfig> {
    readonly input: StartSnapshotCommandInput;
    constructor(input: StartSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EBSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartSnapshotCommandInput, StartSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
