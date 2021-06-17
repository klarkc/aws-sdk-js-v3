import { __extends } from "tslib";
import { DeleteIdentityProviderRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteIdentityProviderCommand, serializeAws_json1_1DeleteIdentityProviderCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an identity provider for a user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DeleteIdentityProviderCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteIdentityProviderCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DeleteIdentityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteIdentityProviderCommand = /** @class */ (function (_super) {
    __extends(DeleteIdentityProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteIdentityProviderCommand(input) {
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
    DeleteIdentityProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "DeleteIdentityProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteIdentityProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteIdentityProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteIdentityProviderCommand(input, context);
    };
    DeleteIdentityProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteIdentityProviderCommand(output, context);
    };
    return DeleteIdentityProviderCommand;
}($Command));
export { DeleteIdentityProviderCommand };
//# sourceMappingURL=DeleteIdentityProviderCommand.js.map