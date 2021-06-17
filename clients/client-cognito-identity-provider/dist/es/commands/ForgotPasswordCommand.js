import { __extends } from "tslib";
import { ForgotPasswordRequest, ForgotPasswordResponse } from "../models/models_0";
import { deserializeAws_json1_1ForgotPasswordCommand, serializeAws_json1_1ForgotPasswordCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Calling this API causes a message to be sent to the end user with a confirmation code
 *             that is required to change the user's password. For the <code>Username</code> parameter,
 *             you can use the username or user alias. The method used to send the confirmation code is
 *             sent according to the specified AccountRecoverySetting. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-recover-a-user-account.html">Recovering
 *                 User Accounts</a> in the <i>Amazon Cognito Developer Guide</i>. If
 *             neither a verified phone number nor a verified email exists, an
 *                 <code>InvalidParameterException</code> is thrown. To use the confirmation code for
 *             resetting the password, call <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html">ConfirmForgotPassword</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ForgotPasswordCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ForgotPasswordCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ForgotPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ForgotPasswordCommandInput} for command's `input` shape.
 * @see {@link ForgotPasswordCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ForgotPasswordCommand = /** @class */ (function (_super) {
    __extends(ForgotPasswordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ForgotPasswordCommand(input) {
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
    ForgotPasswordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "ForgotPasswordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ForgotPasswordRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ForgotPasswordResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ForgotPasswordCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ForgotPasswordCommand(input, context);
    };
    ForgotPasswordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ForgotPasswordCommand(output, context);
    };
    return ForgotPasswordCommand;
}($Command));
export { ForgotPasswordCommand };
//# sourceMappingURL=ForgotPasswordCommand.js.map