import { __extends } from "tslib";
import { DeregisterTransitGatewayRequest, DeregisterTransitGatewayResponse } from "../models/models_0";
import { deserializeAws_restJson1DeregisterTransitGatewayCommand, serializeAws_restJson1DeregisterTransitGatewayCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deregisters a transit gateway from your global network. This action does not delete
 *             your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeregisterTransitGatewayCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeregisterTransitGatewayCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DeregisterTransitGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link DeregisterTransitGatewayCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterTransitGatewayCommand = /** @class */ (function (_super) {
    __extends(DeregisterTransitGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterTransitGatewayCommand(input) {
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
    DeregisterTransitGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "DeregisterTransitGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterTransitGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterTransitGatewayResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterTransitGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeregisterTransitGatewayCommand(input, context);
    };
    DeregisterTransitGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeregisterTransitGatewayCommand(output, context);
    };
    return DeregisterTransitGatewayCommand;
}($Command));
export { DeregisterTransitGatewayCommand };
//# sourceMappingURL=DeregisterTransitGatewayCommand.js.map