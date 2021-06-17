import { __extends } from "tslib";
import { CreateKeysAndCertificateRequest, CreateKeysAndCertificateResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateKeysAndCertificateCommand, serializeAws_restJson1CreateKeysAndCertificateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued
 *          public key. You can also call <code>CreateKeysAndCertificate</code> over MQTT from a
 *          device, for more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api">Provisioning MQTT API</a>.</p>
 *          <p>
 *             <b>Note</b> This is the only time AWS IoT issues the private key
 *          for this certificate, so it is important to keep it in a secure location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateKeysAndCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateKeysAndCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateKeysAndCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateKeysAndCertificateCommandInput} for command's `input` shape.
 * @see {@link CreateKeysAndCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateKeysAndCertificateCommand = /** @class */ (function (_super) {
    __extends(CreateKeysAndCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateKeysAndCertificateCommand(input) {
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
    CreateKeysAndCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateKeysAndCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateKeysAndCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateKeysAndCertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateKeysAndCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateKeysAndCertificateCommand(input, context);
    };
    CreateKeysAndCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateKeysAndCertificateCommand(output, context);
    };
    return CreateKeysAndCertificateCommand;
}($Command));
export { CreateKeysAndCertificateCommand };
//# sourceMappingURL=CreateKeysAndCertificateCommand.js.map