import { __extends } from "tslib";
import { CloseTunnelRequest, CloseTunnelResponse } from "../models/models_0";
import { deserializeAws_json1_1CloseTunnelCommand, serializeAws_json1_1CloseTunnelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code>
 * 			request is received, we close the WebSocket connections between the client and proxy
 * 			server so no data can be transmitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, CloseTunnelCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, CloseTunnelCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const command = new CloseTunnelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CloseTunnelCommandInput} for command's `input` shape.
 * @see {@link CloseTunnelCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CloseTunnelCommand = /** @class */ (function (_super) {
    __extends(CloseTunnelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CloseTunnelCommand(input) {
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
    CloseTunnelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSecureTunnelingClient";
        var commandName = "CloseTunnelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CloseTunnelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CloseTunnelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CloseTunnelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CloseTunnelCommand(input, context);
    };
    CloseTunnelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CloseTunnelCommand(output, context);
    };
    return CloseTunnelCommand;
}($Command));
export { CloseTunnelCommand };
//# sourceMappingURL=CloseTunnelCommand.js.map