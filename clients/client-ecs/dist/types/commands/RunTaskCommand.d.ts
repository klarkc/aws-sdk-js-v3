import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { RunTaskRequest, RunTaskResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RunTaskCommandInput extends RunTaskRequest {
}
export interface RunTaskCommandOutput extends RunTaskResponse, __MetadataBearer {
}
/**
 * <p>Starts a new task using the specified task definition.</p>
 * 		       <p>You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places
 * 			tasks using placement constraints and placement strategies. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       <p>Alternatively, you can use <a>StartTask</a> to use your own scheduler or
 * 			place tasks manually on specific container instances.</p>
 * 		       <p>The Amazon ECS API follows an eventual consistency model, due to the distributed nature of
 * 			the system supporting the API. This means that the result of an API command you run that
 * 			affects your Amazon ECS resources might not be immediately visible to all subsequent commands
 * 			you run. Keep this in mind when you carry out an API command that immediately follows a
 * 			previous API command.</p>
 * 		       <p>To manage eventual consistency, you can do the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Confirm the state of the resource before you run a command to modify it. Run
 * 					the DescribeTasks command using an exponential backoff algorithm to ensure that
 * 					you allow enough time for the previous command to propagate through the system.
 * 					To do this, run the DescribeTasks command repeatedly, starting with a couple of
 * 					seconds of wait time and increasing gradually up to five minutes of wait
 * 					time.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Add wait time between subsequent commands, even if the DescribeTasks command
 * 					returns an accurate response. Apply an exponential backoff algorithm starting
 * 					with a couple of seconds of wait time, and increase gradually up to about five
 * 					minutes of wait time.</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, RunTaskCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, RunTaskCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new RunTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RunTaskCommandInput} for command's `input` shape.
 * @see {@link RunTaskCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RunTaskCommand extends $Command<RunTaskCommandInput, RunTaskCommandOutput, ECSClientResolvedConfig> {
    readonly input: RunTaskCommandInput;
    constructor(input: RunTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RunTaskCommandInput, RunTaskCommandOutput>;
    private serialize;
    private deserialize;
}
