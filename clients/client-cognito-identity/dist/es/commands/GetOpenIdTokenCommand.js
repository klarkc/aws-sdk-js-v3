import { __extends } from "tslib";
import { GetOpenIdTokenInput, GetOpenIdTokenResponse } from "../models/models_0";
import { deserializeAws_json1_1GetOpenIdTokenCommand, serializeAws_json1_1GetOpenIdTokenCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by
 *             <a>GetId</a>. You can optionally add additional logins for the identity.
 *          Supplying multiple logins creates an implicit link.</p>
 *          <p>The OpenID token is valid for 10 minutes.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetOpenIdTokenCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetOpenIdTokenCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new GetOpenIdTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpenIdTokenCommandInput} for command's `input` shape.
 * @see {@link GetOpenIdTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOpenIdTokenCommand = /** @class */ (function (_super) {
    __extends(GetOpenIdTokenCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOpenIdTokenCommand(input) {
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
    GetOpenIdTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "GetOpenIdTokenCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOpenIdTokenInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetOpenIdTokenResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOpenIdTokenCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetOpenIdTokenCommand(input, context);
    };
    GetOpenIdTokenCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetOpenIdTokenCommand(output, context);
    };
    return GetOpenIdTokenCommand;
}($Command));
export { GetOpenIdTokenCommand };
//# sourceMappingURL=GetOpenIdTokenCommand.js.map