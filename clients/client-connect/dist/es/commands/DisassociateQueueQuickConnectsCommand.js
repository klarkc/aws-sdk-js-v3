import { __extends } from "tslib";
import { DisassociateQueueQuickConnectsRequest } from "../models/models_0";
import { deserializeAws_restJson1DisassociateQueueQuickConnectsCommand, serializeAws_restJson1DisassociateQueueQuickConnectsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Disassociates a set of quick connects from a queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateQueueQuickConnectsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateQueueQuickConnectsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DisassociateQueueQuickConnectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateQueueQuickConnectsCommandInput} for command's `input` shape.
 * @see {@link DisassociateQueueQuickConnectsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateQueueQuickConnectsCommand = /** @class */ (function (_super) {
    __extends(DisassociateQueueQuickConnectsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateQueueQuickConnectsCommand(input) {
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
    DisassociateQueueQuickConnectsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DisassociateQueueQuickConnectsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateQueueQuickConnectsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateQueueQuickConnectsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateQueueQuickConnectsCommand(input, context);
    };
    DisassociateQueueQuickConnectsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateQueueQuickConnectsCommand(output, context);
    };
    return DisassociateQueueQuickConnectsCommand;
}($Command));
export { DisassociateQueueQuickConnectsCommand };
//# sourceMappingURL=DisassociateQueueQuickConnectsCommand.js.map