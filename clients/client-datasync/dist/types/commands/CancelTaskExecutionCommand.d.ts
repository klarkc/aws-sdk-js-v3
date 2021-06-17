import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CancelTaskExecutionRequest, CancelTaskExecutionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelTaskExecutionCommandInput extends CancelTaskExecutionRequest {
}
export interface CancelTaskExecutionCommandOutput extends CancelTaskExecutionResponse, __MetadataBearer {
}
/**
 * <p>Cancels execution of a task. </p>
 *          <p>When you cancel a task execution, the transfer of some files is abruptly interrupted.
 *       The contents of files that are transferred to the destination might be incomplete or
 *       inconsistent with the source files. However, if you start a new task execution on the same
 *       task and you allow the task execution to complete, file content on the destination is complete
 *       and consistent. This applies to other unexpected failures that interrupt a task execution. In
 *       all of these cases, AWS DataSync successfully complete the transfer when you start the next
 *       task execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CancelTaskExecutionCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CancelTaskExecutionCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CancelTaskExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelTaskExecutionCommandInput} for command's `input` shape.
 * @see {@link CancelTaskExecutionCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelTaskExecutionCommand extends $Command<CancelTaskExecutionCommandInput, CancelTaskExecutionCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: CancelTaskExecutionCommandInput;
    constructor(input: CancelTaskExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelTaskExecutionCommandInput, CancelTaskExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
