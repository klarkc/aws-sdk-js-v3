import { __extends } from "tslib";
import { DisassociateWirelessGatewayFromCertificateRequest, DisassociateWirelessGatewayFromCertificateResponse, } from "../models/models_0";
import { deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand, serializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a wireless gateway from its currently associated certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateWirelessGatewayFromCertificateCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateWirelessGatewayFromCertificateCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DisassociateWirelessGatewayFromCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWirelessGatewayFromCertificateCommandInput} for command's `input` shape.
 * @see {@link DisassociateWirelessGatewayFromCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateWirelessGatewayFromCertificateCommand = /** @class */ (function (_super) {
    __extends(DisassociateWirelessGatewayFromCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateWirelessGatewayFromCertificateCommand(input) {
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
    DisassociateWirelessGatewayFromCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "DisassociateWirelessGatewayFromCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateWirelessGatewayFromCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateWirelessGatewayFromCertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateWirelessGatewayFromCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand(input, context);
    };
    DisassociateWirelessGatewayFromCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand(output, context);
    };
    return DisassociateWirelessGatewayFromCertificateCommand;
}($Command));
export { DisassociateWirelessGatewayFromCertificateCommand };
//# sourceMappingURL=DisassociateWirelessGatewayFromCertificateCommand.js.map