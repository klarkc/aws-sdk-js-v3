import { __extends } from "tslib";
import { GetUserPoolMfaConfigRequest, GetUserPoolMfaConfigResponse } from "../models/models_0";
import { deserializeAws_json1_1GetUserPoolMfaConfigCommand, serializeAws_json1_1GetUserPoolMfaConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the user pool multi-factor authentication (MFA) configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUserPoolMfaConfigCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUserPoolMfaConfigCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetUserPoolMfaConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserPoolMfaConfigCommandInput} for command's `input` shape.
 * @see {@link GetUserPoolMfaConfigCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUserPoolMfaConfigCommand = /** @class */ (function (_super) {
    __extends(GetUserPoolMfaConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetUserPoolMfaConfigCommand(input) {
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
    GetUserPoolMfaConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "GetUserPoolMfaConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetUserPoolMfaConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetUserPoolMfaConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetUserPoolMfaConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetUserPoolMfaConfigCommand(input, context);
    };
    GetUserPoolMfaConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetUserPoolMfaConfigCommand(output, context);
    };
    return GetUserPoolMfaConfigCommand;
}($Command));
export { GetUserPoolMfaConfigCommand };
//# sourceMappingURL=GetUserPoolMfaConfigCommand.js.map