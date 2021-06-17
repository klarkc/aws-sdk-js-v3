import { __extends } from "tslib";
import { UpdateResourceServerRequest, UpdateResourceServerResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateResourceServerCommand, serializeAws_json1_1UpdateResourceServerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the name and scopes of resource server. All other fields are read-only.</p>
 *         <important>
 *             <p>If you don't provide a value for an attribute, it will be set to the default
 *                 value.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateResourceServerCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateResourceServerCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateResourceServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceServerCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceServerCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateResourceServerCommand = /** @class */ (function (_super) {
    __extends(UpdateResourceServerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateResourceServerCommand(input) {
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
    UpdateResourceServerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "UpdateResourceServerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateResourceServerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateResourceServerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateResourceServerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateResourceServerCommand(input, context);
    };
    UpdateResourceServerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateResourceServerCommand(output, context);
    };
    return UpdateResourceServerCommand;
}($Command));
export { UpdateResourceServerCommand };
//# sourceMappingURL=UpdateResourceServerCommand.js.map