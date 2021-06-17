import { __extends } from "tslib";
import { ConfirmForgotPasswordRequest, ConfirmForgotPasswordResponse } from "../models/models_0";
import { deserializeAws_json1_1ConfirmForgotPasswordCommand, serializeAws_json1_1ConfirmForgotPasswordCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows a user to enter a confirmation code to reset a forgotten password.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ConfirmForgotPasswordCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ConfirmForgotPasswordCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ConfirmForgotPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmForgotPasswordCommandInput} for command's `input` shape.
 * @see {@link ConfirmForgotPasswordCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ConfirmForgotPasswordCommand = /** @class */ (function (_super) {
    __extends(ConfirmForgotPasswordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ConfirmForgotPasswordCommand(input) {
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
    ConfirmForgotPasswordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "ConfirmForgotPasswordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ConfirmForgotPasswordRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ConfirmForgotPasswordResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ConfirmForgotPasswordCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ConfirmForgotPasswordCommand(input, context);
    };
    ConfirmForgotPasswordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ConfirmForgotPasswordCommand(output, context);
    };
    return ConfirmForgotPasswordCommand;
}($Command));
export { ConfirmForgotPasswordCommand };
//# sourceMappingURL=ConfirmForgotPasswordCommand.js.map