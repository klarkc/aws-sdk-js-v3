import { __extends } from "tslib";
import { DeleteTaskSetRequest, DeleteTaskSetResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteTaskSetCommand, serializeAws_json1_1DeleteTaskSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified task set within a service. This is used when a service uses the
 * 				<code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteTaskSetCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteTaskSetCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeleteTaskSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTaskSetCommandInput} for command's `input` shape.
 * @see {@link DeleteTaskSetCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTaskSetCommand = /** @class */ (function (_super) {
    __extends(DeleteTaskSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTaskSetCommand(input) {
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
    DeleteTaskSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "DeleteTaskSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTaskSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTaskSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTaskSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTaskSetCommand(input, context);
    };
    DeleteTaskSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTaskSetCommand(output, context);
    };
    return DeleteTaskSetCommand;
}($Command));
export { DeleteTaskSetCommand };
//# sourceMappingURL=DeleteTaskSetCommand.js.map