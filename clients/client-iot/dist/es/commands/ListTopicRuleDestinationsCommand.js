import { __extends } from "tslib";
import { ListTopicRuleDestinationsRequest, ListTopicRuleDestinationsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListTopicRuleDestinationsCommand, serializeAws_restJson1ListTopicRuleDestinationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the topic rule destinations in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTopicRuleDestinationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListTopicRuleDestinationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListTopicRuleDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTopicRuleDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListTopicRuleDestinationsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTopicRuleDestinationsCommand = /** @class */ (function (_super) {
    __extends(ListTopicRuleDestinationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTopicRuleDestinationsCommand(input) {
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
    ListTopicRuleDestinationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListTopicRuleDestinationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTopicRuleDestinationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTopicRuleDestinationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTopicRuleDestinationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTopicRuleDestinationsCommand(input, context);
    };
    ListTopicRuleDestinationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTopicRuleDestinationsCommand(output, context);
    };
    return ListTopicRuleDestinationsCommand;
}($Command));
export { ListTopicRuleDestinationsCommand };
//# sourceMappingURL=ListTopicRuleDestinationsCommand.js.map