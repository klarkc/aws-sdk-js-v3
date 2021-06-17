import { __extends } from "tslib";
import { ListQueueQuickConnectsRequest, ListQueueQuickConnectsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListQueueQuickConnectsCommand, serializeAws_restJson1ListQueueQuickConnectsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Lists the quick connects associated with a queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListQueueQuickConnectsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListQueueQuickConnectsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListQueueQuickConnectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueueQuickConnectsCommandInput} for command's `input` shape.
 * @see {@link ListQueueQuickConnectsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListQueueQuickConnectsCommand = /** @class */ (function (_super) {
    __extends(ListQueueQuickConnectsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListQueueQuickConnectsCommand(input) {
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
    ListQueueQuickConnectsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListQueueQuickConnectsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListQueueQuickConnectsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListQueueQuickConnectsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListQueueQuickConnectsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListQueueQuickConnectsCommand(input, context);
    };
    ListQueueQuickConnectsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListQueueQuickConnectsCommand(output, context);
    };
    return ListQueueQuickConnectsCommand;
}($Command));
export { ListQueueQuickConnectsCommand };
//# sourceMappingURL=ListQueueQuickConnectsCommand.js.map