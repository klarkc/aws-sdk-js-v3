import { __extends } from "tslib";
import { ListConfigurationRevisionsRequest, ListConfigurationRevisionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListConfigurationRevisionsCommand, serializeAws_restJson1ListConfigurationRevisionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all the MSK configurations in this Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListConfigurationRevisionsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListConfigurationRevisionsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new ListConfigurationRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigurationRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationRevisionsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListConfigurationRevisionsCommand = /** @class */ (function (_super) {
    __extends(ListConfigurationRevisionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListConfigurationRevisionsCommand(input) {
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
    ListConfigurationRevisionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "ListConfigurationRevisionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListConfigurationRevisionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListConfigurationRevisionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListConfigurationRevisionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListConfigurationRevisionsCommand(input, context);
    };
    ListConfigurationRevisionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListConfigurationRevisionsCommand(output, context);
    };
    return ListConfigurationRevisionsCommand;
}($Command));
export { ListConfigurationRevisionsCommand };
//# sourceMappingURL=ListConfigurationRevisionsCommand.js.map