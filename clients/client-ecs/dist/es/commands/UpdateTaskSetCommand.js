import { __extends } from "tslib";
import { UpdateTaskSetRequest, UpdateTaskSetResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateTaskSetCommand, serializeAws_json1_1UpdateTaskSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies a task set. This is used when a service uses the <code>EXTERNAL</code>
 * 			deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
 * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateTaskSetCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateTaskSetCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new UpdateTaskSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTaskSetCommandInput} for command's `input` shape.
 * @see {@link UpdateTaskSetCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTaskSetCommand = /** @class */ (function (_super) {
    __extends(UpdateTaskSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTaskSetCommand(input) {
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
    UpdateTaskSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "UpdateTaskSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTaskSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTaskSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTaskSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateTaskSetCommand(input, context);
    };
    UpdateTaskSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateTaskSetCommand(output, context);
    };
    return UpdateTaskSetCommand;
}($Command));
export { UpdateTaskSetCommand };
//# sourceMappingURL=UpdateTaskSetCommand.js.map