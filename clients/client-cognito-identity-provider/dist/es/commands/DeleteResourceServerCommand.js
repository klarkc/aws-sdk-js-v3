import { __extends } from "tslib";
import { DeleteResourceServerRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteResourceServerCommand, serializeAws_json1_1DeleteResourceServerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a resource server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DeleteResourceServerCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteResourceServerCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DeleteResourceServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceServerCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceServerCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteResourceServerCommand = /** @class */ (function (_super) {
    __extends(DeleteResourceServerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteResourceServerCommand(input) {
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
    DeleteResourceServerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "DeleteResourceServerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteResourceServerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteResourceServerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteResourceServerCommand(input, context);
    };
    DeleteResourceServerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteResourceServerCommand(output, context);
    };
    return DeleteResourceServerCommand;
}($Command));
export { DeleteResourceServerCommand };
//# sourceMappingURL=DeleteResourceServerCommand.js.map