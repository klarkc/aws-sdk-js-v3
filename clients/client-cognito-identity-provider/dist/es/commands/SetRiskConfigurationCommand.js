import { __extends } from "tslib";
import { SetRiskConfigurationRequest, SetRiskConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1SetRiskConfigurationCommand, serializeAws_json1_1SetRiskConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configures actions on detected risks. To delete the risk configuration for
 *                 <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four
 *             configuration types.</p>
 *         <p>To enable Amazon Cognito advanced security features, update the user pool to include
 *             the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetRiskConfigurationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetRiskConfigurationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new SetRiskConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetRiskConfigurationCommandInput} for command's `input` shape.
 * @see {@link SetRiskConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetRiskConfigurationCommand = /** @class */ (function (_super) {
    __extends(SetRiskConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetRiskConfigurationCommand(input) {
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
    SetRiskConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "SetRiskConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetRiskConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SetRiskConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetRiskConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SetRiskConfigurationCommand(input, context);
    };
    SetRiskConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SetRiskConfigurationCommand(output, context);
    };
    return SetRiskConfigurationCommand;
}($Command));
export { SetRiskConfigurationCommand };
//# sourceMappingURL=SetRiskConfigurationCommand.js.map