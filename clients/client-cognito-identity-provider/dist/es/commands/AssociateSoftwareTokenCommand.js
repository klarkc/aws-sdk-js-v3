import { __extends } from "tslib";
import { AssociateSoftwareTokenRequest, AssociateSoftwareTokenResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateSoftwareTokenCommand, serializeAws_json1_1AssociateSoftwareTokenCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a unique generated shared secret key code for the user account. The request
 *             takes an access token or a session string, but not both.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AssociateSoftwareTokenCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AssociateSoftwareTokenCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AssociateSoftwareTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSoftwareTokenCommandInput} for command's `input` shape.
 * @see {@link AssociateSoftwareTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateSoftwareTokenCommand = /** @class */ (function (_super) {
    __extends(AssociateSoftwareTokenCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateSoftwareTokenCommand(input) {
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
    AssociateSoftwareTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AssociateSoftwareTokenCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateSoftwareTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateSoftwareTokenResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateSoftwareTokenCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateSoftwareTokenCommand(input, context);
    };
    AssociateSoftwareTokenCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateSoftwareTokenCommand(output, context);
    };
    return AssociateSoftwareTokenCommand;
}($Command));
export { AssociateSoftwareTokenCommand };
//# sourceMappingURL=AssociateSoftwareTokenCommand.js.map