import { __extends } from "tslib";
import { GetOpenIdTokenForDeveloperIdentityInput, GetOpenIdTokenForDeveloperIdentityResponse, } from "../models/models_0";
import { deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand, serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect
 *          token for a user authenticated by your backend authentication process. Supplying multiple
 *          logins will create an implicit linked account. You can only specify one developer provider
 *          as part of the <code>Logins</code> map, which is linked to the identity pool. The developer
 *          provider is the "domain" by which Cognito will refer to your users.</p>
 *          <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity
 *          and to link new logins (that is, user credentials issued by a public provider or developer
 *          provider) to an existing identity. When you want to create a new identity, the
 *             <code>IdentityId</code> should be null. When you want to associate a new login with an
 *          existing authenticated/unauthenticated identity, you can do so by providing the existing
 *             <code>IdentityId</code>. This API will create the identity in the specified
 *             <code>IdentityPoolId</code>.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetOpenIdTokenForDeveloperIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetOpenIdTokenForDeveloperIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new GetOpenIdTokenForDeveloperIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpenIdTokenForDeveloperIdentityCommandInput} for command's `input` shape.
 * @see {@link GetOpenIdTokenForDeveloperIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOpenIdTokenForDeveloperIdentityCommand = /** @class */ (function (_super) {
    __extends(GetOpenIdTokenForDeveloperIdentityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOpenIdTokenForDeveloperIdentityCommand(input) {
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
    GetOpenIdTokenForDeveloperIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "GetOpenIdTokenForDeveloperIdentityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOpenIdTokenForDeveloperIdentityInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetOpenIdTokenForDeveloperIdentityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOpenIdTokenForDeveloperIdentityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand(input, context);
    };
    GetOpenIdTokenForDeveloperIdentityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand(output, context);
    };
    return GetOpenIdTokenForDeveloperIdentityCommand;
}($Command));
export { GetOpenIdTokenForDeveloperIdentityCommand };
//# sourceMappingURL=GetOpenIdTokenForDeveloperIdentityCommand.js.map