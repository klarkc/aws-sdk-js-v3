import { __extends } from "tslib";
import { UpdateQueueOutboundCallerConfigRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommand, serializeAws_restJson1UpdateQueueOutboundCallerConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates the outbound caller ID name, number, and outbound whisper flow for a specified
 *    queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueOutboundCallerConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueOutboundCallerConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateQueueOutboundCallerConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQueueOutboundCallerConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueOutboundCallerConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateQueueOutboundCallerConfigCommand = /** @class */ (function (_super) {
    __extends(UpdateQueueOutboundCallerConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateQueueOutboundCallerConfigCommand(input) {
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
    UpdateQueueOutboundCallerConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateQueueOutboundCallerConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateQueueOutboundCallerConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateQueueOutboundCallerConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateQueueOutboundCallerConfigCommand(input, context);
    };
    UpdateQueueOutboundCallerConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommand(output, context);
    };
    return UpdateQueueOutboundCallerConfigCommand;
}($Command));
export { UpdateQueueOutboundCallerConfigCommand };
//# sourceMappingURL=UpdateQueueOutboundCallerConfigCommand.js.map