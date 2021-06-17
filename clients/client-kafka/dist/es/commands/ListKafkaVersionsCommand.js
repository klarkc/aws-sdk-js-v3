import { __extends } from "tslib";
import { ListKafkaVersionsRequest, ListKafkaVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListKafkaVersionsCommand, serializeAws_restJson1ListKafkaVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of Kafka versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListKafkaVersionsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListKafkaVersionsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new ListKafkaVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListKafkaVersionsCommandInput} for command's `input` shape.
 * @see {@link ListKafkaVersionsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListKafkaVersionsCommand = /** @class */ (function (_super) {
    __extends(ListKafkaVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListKafkaVersionsCommand(input) {
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
    ListKafkaVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "ListKafkaVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListKafkaVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListKafkaVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListKafkaVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListKafkaVersionsCommand(input, context);
    };
    ListKafkaVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListKafkaVersionsCommand(output, context);
    };
    return ListKafkaVersionsCommand;
}($Command));
export { ListKafkaVersionsCommand };
//# sourceMappingURL=ListKafkaVersionsCommand.js.map