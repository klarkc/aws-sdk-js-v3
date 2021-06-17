import { __extends } from "tslib";
import { DeleteUserAttributesRequest, DeleteUserAttributesResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteUserAttributesCommand, serializeAws_json1_1DeleteUserAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the attributes for a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DeleteUserAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteUserAttributesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DeleteUserAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserAttributesCommandInput} for command's `input` shape.
 * @see {@link DeleteUserAttributesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUserAttributesCommand = /** @class */ (function (_super) {
    __extends(DeleteUserAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUserAttributesCommand(input) {
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
    DeleteUserAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "DeleteUserAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUserAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteUserAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUserAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteUserAttributesCommand(input, context);
    };
    DeleteUserAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteUserAttributesCommand(output, context);
    };
    return DeleteUserAttributesCommand;
}($Command));
export { DeleteUserAttributesCommand };
//# sourceMappingURL=DeleteUserAttributesCommand.js.map