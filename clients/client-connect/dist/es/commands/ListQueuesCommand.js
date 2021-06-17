import { __extends } from "tslib";
import { ListQueuesRequest, ListQueuesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListQueuesCommand, serializeAws_restJson1ListQueuesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information about the queues for the specified Amazon Connect instance.</p>
 *          <p>If you do not specify a <code>QueueTypes</code>
 *    parameter, both standard and agent queues are returned. This might cause an unexpected truncation
 *    of results if you have more than 1000 agents and you limit the number of results of the API call
 *    in code.</p>
 *          <p>For more information about queues, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-queues-standard-and-agent.html">Queues: Standard and
 *     Agent</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueuesCommandInput} for command's `input` shape.
 * @see {@link ListQueuesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListQueuesCommand = /** @class */ (function (_super) {
    __extends(ListQueuesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListQueuesCommand(input) {
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
    ListQueuesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListQueuesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListQueuesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListQueuesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListQueuesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListQueuesCommand(input, context);
    };
    ListQueuesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListQueuesCommand(output, context);
    };
    return ListQueuesCommand;
}($Command));
export { ListQueuesCommand };
//# sourceMappingURL=ListQueuesCommand.js.map