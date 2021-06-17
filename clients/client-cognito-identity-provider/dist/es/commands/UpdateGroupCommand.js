import { __extends } from "tslib";
import { UpdateGroupRequest, UpdateGroupResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateGroupCommand, serializeAws_json1_1UpdateGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified group with the specified attributes.</p>
 *         <p>Calling this action requires developer credentials.</p>
 *         <important>
 *             <p>If you don't provide a value for an attribute, it will be set to the default
 *                 value.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateGroupCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateGroupCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateGroupCommand(input) {
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
    UpdateGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "UpdateGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateGroupCommand(input, context);
    };
    UpdateGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateGroupCommand(output, context);
    };
    return UpdateGroupCommand;
}($Command));
export { UpdateGroupCommand };
//# sourceMappingURL=UpdateGroupCommand.js.map