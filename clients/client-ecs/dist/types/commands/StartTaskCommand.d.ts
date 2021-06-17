import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { StartTaskRequest, StartTaskResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartTaskCommandInput extends StartTaskRequest {
}
export interface StartTaskCommandOutput extends StartTaskResponse, __MetadataBearer {
}
/**
 * <p>Starts a new task from the specified task definition on the specified container
 * 			instance or instances.</p>
 * 		       <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, StartTaskCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, StartTaskCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new StartTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTaskCommandInput} for command's `input` shape.
 * @see {@link StartTaskCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartTaskCommand extends $Command<StartTaskCommandInput, StartTaskCommandOutput, ECSClientResolvedConfig> {
    readonly input: StartTaskCommandInput;
    constructor(input: StartTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartTaskCommandInput, StartTaskCommandOutput>;
    private serialize;
    private deserialize;
}
