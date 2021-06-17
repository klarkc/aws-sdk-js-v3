import { __extends } from "tslib";
import { SignOutUserRequest, SignOutUserResponse } from "../models/models_0";
import { deserializeAws_restJson1SignOutUserCommand, serializeAws_restJson1SignOutUserCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Signs the user out from all of their devices. The user can sign in again if they have
 *             valid credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, SignOutUserCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, SignOutUserCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new SignOutUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SignOutUserCommandInput} for command's `input` shape.
 * @see {@link SignOutUserCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SignOutUserCommand = /** @class */ (function (_super) {
    __extends(SignOutUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SignOutUserCommand(input) {
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
    SignOutUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "SignOutUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SignOutUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SignOutUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SignOutUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SignOutUserCommand(input, context);
    };
    SignOutUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SignOutUserCommand(output, context);
    };
    return SignOutUserCommand;
}($Command));
export { SignOutUserCommand };
//# sourceMappingURL=SignOutUserCommand.js.map