import { __extends } from "tslib";
import { DeleteTopicRuleDestinationRequest, DeleteTopicRuleDestinationResponse } from "../models/models_1";
import { deserializeAws_restJson1DeleteTopicRuleDestinationCommand, serializeAws_restJson1DeleteTopicRuleDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a topic rule destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteTopicRuleDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTopicRuleDestinationCommand = /** @class */ (function (_super) {
    __extends(DeleteTopicRuleDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTopicRuleDestinationCommand(input) {
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
    DeleteTopicRuleDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteTopicRuleDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTopicRuleDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTopicRuleDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTopicRuleDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteTopicRuleDestinationCommand(input, context);
    };
    DeleteTopicRuleDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteTopicRuleDestinationCommand(output, context);
    };
    return DeleteTopicRuleDestinationCommand;
}($Command));
export { DeleteTopicRuleDestinationCommand };
//# sourceMappingURL=DeleteTopicRuleDestinationCommand.js.map