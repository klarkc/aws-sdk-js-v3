import { __extends } from "tslib";
import { AdminConfirmSignUpRequest, AdminConfirmSignUpResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminConfirmSignUpCommand, serializeAws_json1_1AdminConfirmSignUpCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Confirms user registration as an admin without using a confirmation code. Works on any
 *             user.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminConfirmSignUpCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminConfirmSignUpCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminConfirmSignUpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminConfirmSignUpCommandInput} for command's `input` shape.
 * @see {@link AdminConfirmSignUpCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminConfirmSignUpCommand = /** @class */ (function (_super) {
    __extends(AdminConfirmSignUpCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminConfirmSignUpCommand(input) {
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
    AdminConfirmSignUpCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminConfirmSignUpCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminConfirmSignUpRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminConfirmSignUpResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminConfirmSignUpCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminConfirmSignUpCommand(input, context);
    };
    AdminConfirmSignUpCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminConfirmSignUpCommand(output, context);
    };
    return AdminConfirmSignUpCommand;
}($Command));
export { AdminConfirmSignUpCommand };
//# sourceMappingURL=AdminConfirmSignUpCommand.js.map