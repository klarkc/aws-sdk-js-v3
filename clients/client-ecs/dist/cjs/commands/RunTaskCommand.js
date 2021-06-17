"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunTaskCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class RunTaskCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "ECSClient";
        const commandName = "RunTaskCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RunTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RunTaskResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RunTaskCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RunTaskCommand(output, context);
    }
}
exports.RunTaskCommand = RunTaskCommand;
//# sourceMappingURL=RunTaskCommand.js.map