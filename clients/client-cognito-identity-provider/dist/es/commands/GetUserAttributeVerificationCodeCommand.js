import { __extends } from "tslib";
import { GetUserAttributeVerificationCodeRequest, GetUserAttributeVerificationCodeResponse } from "../models/models_0";
import { deserializeAws_json1_1GetUserAttributeVerificationCodeCommand, serializeAws_json1_1GetUserAttributeVerificationCodeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the user attribute verification code for the specified attribute name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUserAttributeVerificationCodeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUserAttributeVerificationCodeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetUserAttributeVerificationCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserAttributeVerificationCodeCommandInput} for command's `input` shape.
 * @see {@link GetUserAttributeVerificationCodeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUserAttributeVerificationCodeCommand = /** @class */ (function (_super) {
    __extends(GetUserAttributeVerificationCodeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetUserAttributeVerificationCodeCommand(input) {
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
    GetUserAttributeVerificationCodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "GetUserAttributeVerificationCodeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetUserAttributeVerificationCodeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetUserAttributeVerificationCodeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetUserAttributeVerificationCodeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetUserAttributeVerificationCodeCommand(input, context);
    };
    GetUserAttributeVerificationCodeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetUserAttributeVerificationCodeCommand(output, context);
    };
    return GetUserAttributeVerificationCodeCommand;
}($Command));
export { GetUserAttributeVerificationCodeCommand };
//# sourceMappingURL=GetUserAttributeVerificationCodeCommand.js.map