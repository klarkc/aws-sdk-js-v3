import { __extends } from "tslib";
import { AssociateWirelessGatewayWithCertificateRequest, AssociateWirelessGatewayWithCertificateResponse, } from "../models/models_0";
import { deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand, serializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a wireless gateway with a certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, AssociateWirelessGatewayWithCertificateCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, AssociateWirelessGatewayWithCertificateCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new AssociateWirelessGatewayWithCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateWirelessGatewayWithCertificateCommandInput} for command's `input` shape.
 * @see {@link AssociateWirelessGatewayWithCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateWirelessGatewayWithCertificateCommand = /** @class */ (function (_super) {
    __extends(AssociateWirelessGatewayWithCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateWirelessGatewayWithCertificateCommand(input) {
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
    AssociateWirelessGatewayWithCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "AssociateWirelessGatewayWithCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateWirelessGatewayWithCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateWirelessGatewayWithCertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateWirelessGatewayWithCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand(input, context);
    };
    AssociateWirelessGatewayWithCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand(output, context);
    };
    return AssociateWirelessGatewayWithCertificateCommand;
}($Command));
export { AssociateWirelessGatewayWithCertificateCommand };
//# sourceMappingURL=AssociateWirelessGatewayWithCertificateCommand.js.map