import { __extends } from "tslib";
import { DisassociateTransitGatewayConnectPeerRequest, DisassociateTransitGatewayConnectPeerResponse, } from "../models/models_0";
import { deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand, serializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a transit gateway Connect peer from a device and link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DisassociateTransitGatewayConnectPeerCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DisassociateTransitGatewayConnectPeerCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DisassociateTransitGatewayConnectPeerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTransitGatewayConnectPeerCommandInput} for command's `input` shape.
 * @see {@link DisassociateTransitGatewayConnectPeerCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateTransitGatewayConnectPeerCommand = /** @class */ (function (_super) {
    __extends(DisassociateTransitGatewayConnectPeerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateTransitGatewayConnectPeerCommand(input) {
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
    DisassociateTransitGatewayConnectPeerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "DisassociateTransitGatewayConnectPeerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateTransitGatewayConnectPeerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateTransitGatewayConnectPeerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateTransitGatewayConnectPeerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand(input, context);
    };
    DisassociateTransitGatewayConnectPeerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand(output, context);
    };
    return DisassociateTransitGatewayConnectPeerCommand;
}($Command));
export { DisassociateTransitGatewayConnectPeerCommand };
//# sourceMappingURL=DisassociateTransitGatewayConnectPeerCommand.js.map