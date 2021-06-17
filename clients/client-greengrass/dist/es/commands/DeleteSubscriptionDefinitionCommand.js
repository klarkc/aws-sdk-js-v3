import { __extends } from "tslib";
import { DeleteSubscriptionDefinitionRequest, DeleteSubscriptionDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteSubscriptionDefinitionCommand, serializeAws_restJson1DeleteSubscriptionDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes a subscription definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteSubscriptionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteSubscriptionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DeleteSubscriptionDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSubscriptionDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteSubscriptionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSubscriptionDefinitionCommand = /** @class */ (function (_super) {
    __extends(DeleteSubscriptionDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSubscriptionDefinitionCommand(input) {
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
    DeleteSubscriptionDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "DeleteSubscriptionDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSubscriptionDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSubscriptionDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSubscriptionDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSubscriptionDefinitionCommand(input, context);
    };
    DeleteSubscriptionDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSubscriptionDefinitionCommand(output, context);
    };
    return DeleteSubscriptionDefinitionCommand;
}($Command));
export { DeleteSubscriptionDefinitionCommand };
//# sourceMappingURL=DeleteSubscriptionDefinitionCommand.js.map