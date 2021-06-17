import { __extends } from "tslib";
import { ListRoutingProfileQueuesRequest, ListRoutingProfileQueuesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListRoutingProfileQueuesCommand, serializeAws_restJson1ListRoutingProfileQueuesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the queues associated with a routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListRoutingProfileQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListRoutingProfileQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListRoutingProfileQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoutingProfileQueuesCommandInput} for command's `input` shape.
 * @see {@link ListRoutingProfileQueuesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRoutingProfileQueuesCommand = /** @class */ (function (_super) {
    __extends(ListRoutingProfileQueuesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRoutingProfileQueuesCommand(input) {
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
    ListRoutingProfileQueuesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListRoutingProfileQueuesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRoutingProfileQueuesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRoutingProfileQueuesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRoutingProfileQueuesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRoutingProfileQueuesCommand(input, context);
    };
    ListRoutingProfileQueuesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRoutingProfileQueuesCommand(output, context);
    };
    return ListRoutingProfileQueuesCommand;
}($Command));
export { ListRoutingProfileQueuesCommand };
//# sourceMappingURL=ListRoutingProfileQueuesCommand.js.map