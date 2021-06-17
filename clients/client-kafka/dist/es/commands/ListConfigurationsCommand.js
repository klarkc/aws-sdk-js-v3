import { __extends } from "tslib";
import { ListConfigurationsRequest, ListConfigurationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListConfigurationsCommand, serializeAws_restJson1ListConfigurationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all the MSK configurations in this Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListConfigurationsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListConfigurationsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new ListConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListConfigurationsCommand = /** @class */ (function (_super) {
    __extends(ListConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListConfigurationsCommand(input) {
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
    ListConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "ListConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListConfigurationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListConfigurationsCommand(input, context);
    };
    ListConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListConfigurationsCommand(output, context);
    };
    return ListConfigurationsCommand;
}($Command));
export { ListConfigurationsCommand };
//# sourceMappingURL=ListConfigurationsCommand.js.map