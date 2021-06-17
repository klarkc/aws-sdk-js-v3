import { __extends } from "tslib";
import { AdminSetUserSettingsRequest, AdminSetUserSettingsResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminSetUserSettingsCommand, serializeAws_json1_1AdminSetUserSettingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <i>This action is no longer supported.</i> You can use it to configure
 *             only SMS MFA. You can't use it to configure TOTP software token MFA. To configure either
 *             type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html">AdminSetUserMFAPreference</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminSetUserSettingsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminSetUserSettingsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminSetUserSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminSetUserSettingsCommandInput} for command's `input` shape.
 * @see {@link AdminSetUserSettingsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminSetUserSettingsCommand = /** @class */ (function (_super) {
    __extends(AdminSetUserSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminSetUserSettingsCommand(input) {
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
    AdminSetUserSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminSetUserSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminSetUserSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminSetUserSettingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminSetUserSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminSetUserSettingsCommand(input, context);
    };
    AdminSetUserSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminSetUserSettingsCommand(output, context);
    };
    return AdminSetUserSettingsCommand;
}($Command));
export { AdminSetUserSettingsCommand };
//# sourceMappingURL=AdminSetUserSettingsCommand.js.map