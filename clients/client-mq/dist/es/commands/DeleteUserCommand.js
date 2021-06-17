import { __extends } from "tslib";
import { DeleteUserRequest, DeleteUserResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteUserCommand, serializeAws_restJson1DeleteUserCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes an ActiveMQ user.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DeleteUserCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DeleteUserCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DeleteUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserCommandInput} for command's `input` shape.
 * @see {@link DeleteUserCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUserCommand = /** @class */ (function (_super) {
    __extends(DeleteUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUserCommand(input) {
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
    DeleteUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MqClient";
        var commandName = "DeleteUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteUserCommand(input, context);
    };
    DeleteUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteUserCommand(output, context);
    };
    return DeleteUserCommand;
}($Command));
export { DeleteUserCommand };
//# sourceMappingURL=DeleteUserCommand.js.map