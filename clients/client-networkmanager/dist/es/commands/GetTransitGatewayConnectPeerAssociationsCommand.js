import { __extends } from "tslib";
import { GetTransitGatewayConnectPeerAssociationsRequest, GetTransitGatewayConnectPeerAssociationsResponse, } from "../models/models_0";
import { deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand, serializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about one or more of your transit gateway Connect peer associations in a global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetTransitGatewayConnectPeerAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetTransitGatewayConnectPeerAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetTransitGatewayConnectPeerAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayConnectPeerAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayConnectPeerAssociationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTransitGatewayConnectPeerAssociationsCommand = /** @class */ (function (_super) {
    __extends(GetTransitGatewayConnectPeerAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTransitGatewayConnectPeerAssociationsCommand(input) {
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
    GetTransitGatewayConnectPeerAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "GetTransitGatewayConnectPeerAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTransitGatewayConnectPeerAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTransitGatewayConnectPeerAssociationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTransitGatewayConnectPeerAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand(input, context);
    };
    GetTransitGatewayConnectPeerAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand(output, context);
    };
    return GetTransitGatewayConnectPeerAssociationsCommand;
}($Command));
export { GetTransitGatewayConnectPeerAssociationsCommand };
//# sourceMappingURL=GetTransitGatewayConnectPeerAssociationsCommand.js.map