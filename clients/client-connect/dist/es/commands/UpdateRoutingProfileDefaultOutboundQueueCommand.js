import { __extends } from "tslib";
import { UpdateRoutingProfileDefaultOutboundQueueRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand, serializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the default outbound queue of a routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileDefaultOutboundQueueCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileDefaultOutboundQueueCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateRoutingProfileDefaultOutboundQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoutingProfileDefaultOutboundQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingProfileDefaultOutboundQueueCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRoutingProfileDefaultOutboundQueueCommand = /** @class */ (function (_super) {
    __extends(UpdateRoutingProfileDefaultOutboundQueueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRoutingProfileDefaultOutboundQueueCommand(input) {
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
    UpdateRoutingProfileDefaultOutboundQueueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateRoutingProfileDefaultOutboundQueueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRoutingProfileDefaultOutboundQueueRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRoutingProfileDefaultOutboundQueueCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand(input, context);
    };
    UpdateRoutingProfileDefaultOutboundQueueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand(output, context);
    };
    return UpdateRoutingProfileDefaultOutboundQueueCommand;
}($Command));
export { UpdateRoutingProfileDefaultOutboundQueueCommand };
//# sourceMappingURL=UpdateRoutingProfileDefaultOutboundQueueCommand.js.map