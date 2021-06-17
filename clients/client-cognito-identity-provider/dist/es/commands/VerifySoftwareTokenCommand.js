import { __extends } from "tslib";
import { VerifySoftwareTokenRequest, VerifySoftwareTokenResponse } from "../models/models_1";
import { deserializeAws_json1_1VerifySoftwareTokenCommand, serializeAws_json1_1VerifySoftwareTokenCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this API to register a user's entered TOTP code and mark the user's software token
 *             MFA status as "verified" if successful. The request takes an access token or a session
 *             string, but not both.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, VerifySoftwareTokenCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, VerifySoftwareTokenCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new VerifySoftwareTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifySoftwareTokenCommandInput} for command's `input` shape.
 * @see {@link VerifySoftwareTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var VerifySoftwareTokenCommand = /** @class */ (function (_super) {
    __extends(VerifySoftwareTokenCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function VerifySoftwareTokenCommand(input) {
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
    VerifySoftwareTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "VerifySoftwareTokenCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: VerifySoftwareTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: VerifySoftwareTokenResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    VerifySoftwareTokenCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1VerifySoftwareTokenCommand(input, context);
    };
    VerifySoftwareTokenCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1VerifySoftwareTokenCommand(output, context);
    };
    return VerifySoftwareTokenCommand;
}($Command));
export { VerifySoftwareTokenCommand };
//# sourceMappingURL=VerifySoftwareTokenCommand.js.map