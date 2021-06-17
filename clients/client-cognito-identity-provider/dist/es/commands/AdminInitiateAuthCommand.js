import { __extends } from "tslib";
import { AdminInitiateAuthRequest, AdminInitiateAuthResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminInitiateAuthCommand, serializeAws_json1_1AdminInitiateAuthCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initiates the authentication flow, as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminInitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminInitiateAuthCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminInitiateAuthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminInitiateAuthCommandInput} for command's `input` shape.
 * @see {@link AdminInitiateAuthCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminInitiateAuthCommand = /** @class */ (function (_super) {
    __extends(AdminInitiateAuthCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminInitiateAuthCommand(input) {
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
    AdminInitiateAuthCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminInitiateAuthCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminInitiateAuthRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminInitiateAuthResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminInitiateAuthCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminInitiateAuthCommand(input, context);
    };
    AdminInitiateAuthCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminInitiateAuthCommand(output, context);
    };
    return AdminInitiateAuthCommand;
}($Command));
export { AdminInitiateAuthCommand };
//# sourceMappingURL=AdminInitiateAuthCommand.js.map