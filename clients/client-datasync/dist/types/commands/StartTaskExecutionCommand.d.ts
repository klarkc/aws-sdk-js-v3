import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { StartTaskExecutionRequest, StartTaskExecutionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartTaskExecutionCommandInput extends StartTaskExecutionRequest {
}
export interface StartTaskExecutionCommandOutput extends StartTaskExecutionResponse, __MetadataBearer {
}
/**
 * <p>Starts a specific invocation of a task. A <code>TaskExecution</code> value represents
 *       an individual run of a task. Each task can have at most one <code>TaskExecution</code> at a
 *       time.</p>
 *          <p>
 *             <code>TaskExecution</code> has the following transition phases: INITIALIZING |
 *       PREPARING | TRANSFERRING | VERIFYING | SUCCESS/FAILURE. </p>
 *
 *          <p>For detailed information, see the Task Execution section in the Components and
 *       Terminology topic in the <i>AWS DataSync User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, StartTaskExecutionCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, StartTaskExecutionCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new StartTaskExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTaskExecutionCommandInput} for command's `input` shape.
 * @see {@link StartTaskExecutionCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartTaskExecutionCommand extends $Command<StartTaskExecutionCommandInput, StartTaskExecutionCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: StartTaskExecutionCommandInput;
    constructor(input: StartTaskExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartTaskExecutionCommandInput, StartTaskExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
