import { __extends } from "tslib";
import { AssociateTransitGatewayConnectPeerRequest, AssociateTransitGatewayConnectPeerResponse, } from "../models/models_0";
import { deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommand, serializeAws_restJson1AssociateTransitGatewayConnectPeerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a transit gateway Connect peer with a device, and optionally, with a link. If you
 *             specify a link, it must be associated with the specified device. </p>
 *         <p>You can only associate transit gateway Connect peers that have been created on a
 *             transit gateway that's registered in your global network.</p>
 *         <p>You cannot associate a transit gateway Connect peer with more than one device and link. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, AssociateTransitGatewayConnectPeerCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, AssociateTransitGatewayConnectPeerCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new AssociateTransitGatewayConnectPeerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTransitGatewayConnectPeerCommandInput} for command's `input` shape.
 * @see {@link AssociateTransitGatewayConnectPeerCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateTransitGatewayConnectPeerCommand = /** @class */ (function (_super) {
    __extends(AssociateTransitGatewayConnectPeerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateTransitGatewayConnectPeerCommand(input) {
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
    AssociateTransitGatewayConnectPeerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "AssociateTransitGatewayConnectPeerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateTransitGatewayConnectPeerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateTransitGatewayConnectPeerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateTransitGatewayConnectPeerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateTransitGatewayConnectPeerCommand(input, context);
    };
    AssociateTransitGatewayConnectPeerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommand(output, context);
    };
    return AssociateTransitGatewayConnectPeerCommand;
}($Command));
export { AssociateTransitGatewayConnectPeerCommand };
//# sourceMappingURL=AssociateTransitGatewayConnectPeerCommand.js.map