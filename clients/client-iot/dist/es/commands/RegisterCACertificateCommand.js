import { __extends } from "tslib";
import { RegisterCACertificateRequest, RegisterCACertificateResponse } from "../models/models_2";
import { deserializeAws_restJson1RegisterCACertificateCommand, serializeAws_restJson1RegisterCACertificateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers a CA certificate with AWS IoT. This CA certificate can then be used to sign
 *          device certificates, which can be then registered with AWS IoT. You can register up to 10
 *          CA certificates per AWS account that have the same subject field. This enables you to have
 *          up to 10 certificate authorities sign your device certificates. If you have more than one
 *          CA certificate registered, make sure you pass the CA certificate when you register your
 *          device certificates with the RegisterCertificate API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RegisterCACertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterCACertificateCommandInput} for command's `input` shape.
 * @see {@link RegisterCACertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterCACertificateCommand = /** @class */ (function (_super) {
    __extends(RegisterCACertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterCACertificateCommand(input) {
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
    RegisterCACertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "RegisterCACertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterCACertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterCACertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterCACertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RegisterCACertificateCommand(input, context);
    };
    RegisterCACertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RegisterCACertificateCommand(output, context);
    };
    return RegisterCACertificateCommand;
}($Command));
export { RegisterCACertificateCommand };
//# sourceMappingURL=RegisterCACertificateCommand.js.map