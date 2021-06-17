import { __extends } from "tslib";
import { StopTaskRequest, StopTaskResponse } from "../models/models_0";
import { deserializeAws_json1_1StopTaskCommand, serializeAws_json1_1StopTaskCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a running task. Any tags associated with the task will be deleted.</p>
 * 		       <p>When <a>StopTask</a> is called on a task, the equivalent of <code>docker
 * 				stop</code> is issued to the containers running in the task. This results in a
 * 				<code>SIGTERM</code> value and a default 30-second timeout, after which the
 * 				<code>SIGKILL</code> value is sent and the containers are forcibly stopped. If the
 * 			container handles the <code>SIGTERM</code> value gracefully and exits within 30 seconds
 * 			from receiving it, no <code>SIGKILL</code> value is sent.</p>
 * 		       <note>
 * 			         <p>The default 30-second timeout can be configured on the Amazon ECS container agent with
 * 				the <code>ECS_CONTAINER_STOP_TIMEOUT</code> variable. For more information, see
 * 					<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the
 * 					<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, StopTaskCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, StopTaskCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new StopTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopTaskCommandInput} for command's `input` shape.
 * @see {@link StopTaskCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopTaskCommand = /** @class */ (function (_super) {
    __extends(StopTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopTaskCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    StopTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "StopTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopTaskCommand(input, context);
    };
    StopTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopTaskCommand(output, context);
    };
    return StopTaskCommand;
}($Command));
export { StopTaskCommand };
//# sourceMappingURL=StopTaskCommand.js.map