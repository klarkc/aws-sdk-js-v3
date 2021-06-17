import { __extends } from "tslib";
import { ListClusterOperationsRequest, ListClusterOperationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListClusterOperationsCommand, serializeAws_restJson1ListClusterOperationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListClusterOperationsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListClusterOperationsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new ListClusterOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClusterOperationsCommandInput} for command's `input` shape.
 * @see {@link ListClusterOperationsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListClusterOperationsCommand = /** @class */ (function (_super) {
    __extends(ListClusterOperationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListClusterOperationsCommand(input) {
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
    ListClusterOperationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "ListClusterOperationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListClusterOperationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListClusterOperationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListClusterOperationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListClusterOperationsCommand(input, context);
    };
    ListClusterOperationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListClusterOperationsCommand(output, context);
    };
    return ListClusterOperationsCommand;
}($Command));
export { ListClusterOperationsCommand };
//# sourceMappingURL=ListClusterOperationsCommand.js.map