import { __extends } from "tslib";
import { AssociateWirelessGatewayWithThingRequest, AssociateWirelessGatewayWithThingResponse, } from "../models/models_0";
import { deserializeAws_restJson1AssociateWirelessGatewayWithThingCommand, serializeAws_restJson1AssociateWirelessGatewayWithThingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a wireless gateway with a thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, AssociateWirelessGatewayWithThingCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, AssociateWirelessGatewayWithThingCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new AssociateWirelessGatewayWithThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateWirelessGatewayWithThingCommandInput} for command's `input` shape.
 * @see {@link AssociateWirelessGatewayWithThingCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateWirelessGatewayWithThingCommand = /** @class */ (function (_super) {
    __extends(AssociateWirelessGatewayWithThingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateWirelessGatewayWithThingCommand(input) {
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
    AssociateWirelessGatewayWithThingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "AssociateWirelessGatewayWithThingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateWirelessGatewayWithThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateWirelessGatewayWithThingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateWirelessGatewayWithThingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateWirelessGatewayWithThingCommand(input, context);
    };
    AssociateWirelessGatewayWithThingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateWirelessGatewayWithThingCommand(output, context);
    };
    return AssociateWirelessGatewayWithThingCommand;
}($Command));
export { AssociateWirelessGatewayWithThingCommand };
//# sourceMappingURL=AssociateWirelessGatewayWithThingCommand.js.map