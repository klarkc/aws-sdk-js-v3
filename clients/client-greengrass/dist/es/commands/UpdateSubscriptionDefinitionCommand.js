import { __extends } from "tslib";
import { UpdateSubscriptionDefinitionRequest, UpdateSubscriptionDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateSubscriptionDefinitionCommand, serializeAws_restJson1UpdateSubscriptionDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates a subscription definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateSubscriptionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateSubscriptionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateSubscriptionDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSubscriptionDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateSubscriptionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSubscriptionDefinitionCommand = /** @class */ (function (_super) {
    __extends(UpdateSubscriptionDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSubscriptionDefinitionCommand(input) {
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
    UpdateSubscriptionDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "UpdateSubscriptionDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSubscriptionDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSubscriptionDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSubscriptionDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateSubscriptionDefinitionCommand(input, context);
    };
    UpdateSubscriptionDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateSubscriptionDefinitionCommand(output, context);
    };
    return UpdateSubscriptionDefinitionCommand;
}($Command));
export { UpdateSubscriptionDefinitionCommand };
//# sourceMappingURL=UpdateSubscriptionDefinitionCommand.js.map