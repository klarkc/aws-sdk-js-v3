import { __extends } from "tslib";
import { DisassociateRoutingProfileQueuesRequest } from "../models/models_0";
import { deserializeAws_restJson1DisassociateRoutingProfileQueuesCommand, serializeAws_restJson1DisassociateRoutingProfileQueuesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a set of queues from a routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateRoutingProfileQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateRoutingProfileQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DisassociateRoutingProfileQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateRoutingProfileQueuesCommandInput} for command's `input` shape.
 * @see {@link DisassociateRoutingProfileQueuesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateRoutingProfileQueuesCommand = /** @class */ (function (_super) {
    __extends(DisassociateRoutingProfileQueuesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateRoutingProfileQueuesCommand(input) {
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
    DisassociateRoutingProfileQueuesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DisassociateRoutingProfileQueuesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateRoutingProfileQueuesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateRoutingProfileQueuesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateRoutingProfileQueuesCommand(input, context);
    };
    DisassociateRoutingProfileQueuesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateRoutingProfileQueuesCommand(output, context);
    };
    return DisassociateRoutingProfileQueuesCommand;
}($Command));
export { DisassociateRoutingProfileQueuesCommand };
//# sourceMappingURL=DisassociateRoutingProfileQueuesCommand.js.map