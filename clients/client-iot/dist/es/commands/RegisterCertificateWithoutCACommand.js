import { __extends } from "tslib";
import { RegisterCertificateWithoutCARequest, RegisterCertificateWithoutCAResponse } from "../models/models_2";
import { deserializeAws_restJson1RegisterCertificateWithoutCACommand, serializeAws_restJson1RegisterCertificateWithoutCACommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Register a certificate that does not have a certificate authority (CA).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterCertificateWithoutCACommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterCertificateWithoutCACommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RegisterCertificateWithoutCACommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterCertificateWithoutCACommandInput} for command's `input` shape.
 * @see {@link RegisterCertificateWithoutCACommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterCertificateWithoutCACommand = /** @class */ (function (_super) {
    __extends(RegisterCertificateWithoutCACommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterCertificateWithoutCACommand(input) {
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
    RegisterCertificateWithoutCACommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "RegisterCertificateWithoutCACommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterCertificateWithoutCARequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterCertificateWithoutCAResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterCertificateWithoutCACommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RegisterCertificateWithoutCACommand(input, context);
    };
    RegisterCertificateWithoutCACommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RegisterCertificateWithoutCACommand(output, context);
    };
    return RegisterCertificateWithoutCACommand;
}($Command));
export { RegisterCertificateWithoutCACommand };
//# sourceMappingURL=RegisterCertificateWithoutCACommand.js.map