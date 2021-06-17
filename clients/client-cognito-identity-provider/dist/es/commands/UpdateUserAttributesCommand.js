import { __extends } from "tslib";
import { UpdateUserAttributesRequest, UpdateUserAttributesResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateUserAttributesCommand, serializeAws_json1_1UpdateUserAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows a user to update a specific attribute (one at a time).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateUserAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateUserAttributesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateUserAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateUserAttributesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUserAttributesCommand = /** @class */ (function (_super) {
    __extends(UpdateUserAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateUserAttributesCommand(input) {
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
    UpdateUserAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "UpdateUserAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateUserAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateUserAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateUserAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateUserAttributesCommand(input, context);
    };
    UpdateUserAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateUserAttributesCommand(output, context);
    };
    return UpdateUserAttributesCommand;
}($Command));
export { UpdateUserAttributesCommand };
//# sourceMappingURL=UpdateUserAttributesCommand.js.map