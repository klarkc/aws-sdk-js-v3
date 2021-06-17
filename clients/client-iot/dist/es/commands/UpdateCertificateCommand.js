import { __extends } from "tslib";
import { UpdateCertificateRequest } from "../models/models_2";
import { deserializeAws_restJson1UpdateCertificateCommand, serializeAws_restJson1UpdateCertificateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the status of the specified certificate. This operation is
 *          idempotent.</p>
 *          <p>Certificates must be in the ACTIVE state to authenticate devices that use
 *          a certificate to connect to AWS IoT.</p>
 *          <p>Within a few minutes of updating a certificate from the ACTIVE state to any other
 *          state, AWS IoT disconnects all devices that used that certificate to connect. Devices cannot
 *          use a certificate that is not in the ACTIVE state to reconnect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCertificateCommand = /** @class */ (function (_super) {
    __extends(UpdateCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCertificateCommand(input) {
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
    UpdateCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateCertificateCommand(input, context);
    };
    UpdateCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateCertificateCommand(output, context);
    };
    return UpdateCertificateCommand;
}($Command));
export { UpdateCertificateCommand };
//# sourceMappingURL=UpdateCertificateCommand.js.map