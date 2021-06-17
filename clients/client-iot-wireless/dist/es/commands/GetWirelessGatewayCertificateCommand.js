import { __extends } from "tslib";
import { GetWirelessGatewayCertificateRequest, GetWirelessGatewayCertificateResponse } from "../models/models_0";
import { deserializeAws_restJson1GetWirelessGatewayCertificateCommand, serializeAws_restJson1GetWirelessGatewayCertificateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the ID of the certificate that is currently associated with a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayCertificateCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayCertificateCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetWirelessGatewayCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWirelessGatewayCertificateCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWirelessGatewayCertificateCommand = /** @class */ (function (_super) {
    __extends(GetWirelessGatewayCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetWirelessGatewayCertificateCommand(input) {
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
    GetWirelessGatewayCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "GetWirelessGatewayCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetWirelessGatewayCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetWirelessGatewayCertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetWirelessGatewayCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetWirelessGatewayCertificateCommand(input, context);
    };
    GetWirelessGatewayCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetWirelessGatewayCertificateCommand(output, context);
    };
    return GetWirelessGatewayCertificateCommand;
}($Command));
export { GetWirelessGatewayCertificateCommand };
//# sourceMappingURL=GetWirelessGatewayCertificateCommand.js.map