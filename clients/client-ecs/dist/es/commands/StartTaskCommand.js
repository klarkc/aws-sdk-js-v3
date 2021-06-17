import { __extends } from "tslib";
import { StartTaskRequest, StartTaskResponse } from "../models/models_0";
import { deserializeAws_json1_1StartTaskCommand, serializeAws_json1_1StartTaskCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var StartTaskCommand = /** @class */ (function (_super) {
    __extends(StartTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartTaskCommand(input) {
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
    StartTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "StartTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartTaskCommand(input, context);
    };
    StartTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartTaskCommand(output, context);
    };
    return StartTaskCommand;
}($Command));
export { StartTaskCommand };
//# sourceMappingURL=StartTaskCommand.js.map