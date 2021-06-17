import { __extends } from "tslib";
import { UpdateUserRequest, UpdateUserResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateUserCommand, serializeAws_json1_1UpdateUserCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Assigns new properties to a user. Parameters you pass modify any or all of the following:
 *       the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code>
 *       you specify.</p>
 *
 *          <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the
 *       updated user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateUserCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateUserCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserCommandInput} for command's `input` shape.
 * @see {@link UpdateUserCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUserCommand = /** @class */ (function (_super) {
    __extends(UpdateUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateUserCommand(input) {
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
    UpdateUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "UpdateUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateUserCommand(input, context);
    };
    UpdateUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateUserCommand(output, context);
    };
    return UpdateUserCommand;
}($Command));
export { UpdateUserCommand };
//# sourceMappingURL=UpdateUserCommand.js.map