import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CancelDataRepositoryTaskRequest, CancelDataRepositoryTaskResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelDataRepositoryTaskCommandInput extends CancelDataRepositoryTaskRequest {
}
export interface CancelDataRepositoryTaskCommandOutput extends CancelDataRepositoryTaskResponse, __MetadataBearer {
}
/**
 * <p>Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the
 *             <code>PENDING</code> or <code>EXECUTING</code> state. When you cancel a task, Amazon FSx does the following.</p>
 *             <ul>
 *             <li>
 *                <p>Any files that FSx has already exported are not reverted.</p>
 *             </li>
 *             <li>
 *                <p>FSx continues to export any files that are "in-flight" when the cancel operation is received.</p>
 *             </li>
 *             <li>
 *                <p>FSx does not export any files that have not yet been exported.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CancelDataRepositoryTaskCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CancelDataRepositoryTaskCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CancelDataRepositoryTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelDataRepositoryTaskCommandInput} for command's `input` shape.
 * @see {@link CancelDataRepositoryTaskCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelDataRepositoryTaskCommand extends $Command<CancelDataRepositoryTaskCommandInput, CancelDataRepositoryTaskCommandOutput, FSxClientResolvedConfig> {
    readonly input: CancelDataRepositoryTaskCommandInput;
    constructor(input: CancelDataRepositoryTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelDataRepositoryTaskCommandInput, CancelDataRepositoryTaskCommandOutput>;
    private serialize;
    private deserialize;
}
