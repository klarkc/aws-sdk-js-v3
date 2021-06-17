import { __extends } from "tslib";
import { DeleteUserPoolClientRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteUserPoolClientCommand, serializeAws_json1_1DeleteUserPoolClientCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows the developer to delete the user pool client.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DeleteUserPoolClientCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteUserPoolClientCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DeleteUserPoolClientCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserPoolClientCommandInput} for command's `input` shape.
 * @see {@link DeleteUserPoolClientCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUserPoolClientCommand = /** @class */ (function (_super) {
    __extends(DeleteUserPoolClientCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUserPoolClientCommand(input) {
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
    DeleteUserPoolClientCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "DeleteUserPoolClientCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUserPoolClientRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUserPoolClientCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteUserPoolClientCommand(input, context);
    };
    DeleteUserPoolClientCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteUserPoolClientCommand(output, context);
    };
    return DeleteUserPoolClientCommand;
}($Command));
export { DeleteUserPoolClientCommand };
//# sourceMappingURL=DeleteUserPoolClientCommand.js.map