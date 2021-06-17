import { __extends } from "tslib";
import { SetUserSettingsRequest, SetUserSettingsResponse } from "../models/models_0";
import { deserializeAws_json1_1SetUserSettingsCommand, serializeAws_json1_1SetUserSettingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <i>This action is no longer supported.</i> You can use it to configure
 *             only SMS MFA. You can't use it to configure TOTP software token MFA. To configure either
 *             type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html">SetUserMFAPreference</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetUserSettingsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetUserSettingsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new SetUserSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetUserSettingsCommandInput} for command's `input` shape.
 * @see {@link SetUserSettingsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetUserSettingsCommand = /** @class */ (function (_super) {
    __extends(SetUserSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetUserSettingsCommand(input) {
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
    SetUserSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "SetUserSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetUserSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SetUserSettingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetUserSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SetUserSettingsCommand(input, context);
    };
    SetUserSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SetUserSettingsCommand(output, context);
    };
    return SetUserSettingsCommand;
}($Command));
export { SetUserSettingsCommand };
//# sourceMappingURL=SetUserSettingsCommand.js.map