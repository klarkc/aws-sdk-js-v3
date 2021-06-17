import { __extends } from "tslib";
import { RegisterCertificateRequest, RegisterCertificateResponse } from "../models/models_2";
import { deserializeAws_restJson1RegisterCertificateCommand, serializeAws_restJson1RegisterCertificateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers a device certificate with AWS IoT. If you have more than one CA certificate
 *          that has the same subject field, you must specify the CA certificate that was used to sign
 *          the device certificate being registered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RegisterCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterCertificateCommandInput} for command's `input` shape.
 * @see {@link RegisterCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterCertificateCommand = /** @class */ (function (_super) {
    __extends(RegisterCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterCertificateCommand(input) {
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
    RegisterCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "RegisterCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterCertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RegisterCertificateCommand(input, context);
    };
    RegisterCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RegisterCertificateCommand(output, context);
    };
    return RegisterCertificateCommand;
}($Command));
export { RegisterCertificateCommand };
//# sourceMappingURL=RegisterCertificateCommand.js.map