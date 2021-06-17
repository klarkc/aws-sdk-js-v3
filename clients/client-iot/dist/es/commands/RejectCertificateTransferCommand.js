import { __extends } from "tslib";
import { RejectCertificateTransferRequest } from "../models/models_2";
import { deserializeAws_restJson1RejectCertificateTransferCommand, serializeAws_restJson1RejectCertificateTransferCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Rejects a pending certificate transfer. After AWS IoT rejects a certificate transfer,
 *          the certificate status changes from <b>PENDING_TRANSFER</b> to
 *             <b>INACTIVE</b>.</p>
 *          <p>To check for pending certificate transfers, call <a>ListCertificates</a>
 *          to enumerate your certificates.</p>
 *          <p>This operation can only be called by the transfer destination. After it is called,
 *          the certificate will be returned to the source's account in the INACTIVE state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RejectCertificateTransferCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RejectCertificateTransferCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RejectCertificateTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectCertificateTransferCommandInput} for command's `input` shape.
 * @see {@link RejectCertificateTransferCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RejectCertificateTransferCommand = /** @class */ (function (_super) {
    __extends(RejectCertificateTransferCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RejectCertificateTransferCommand(input) {
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
    RejectCertificateTransferCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "RejectCertificateTransferCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RejectCertificateTransferRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RejectCertificateTransferCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RejectCertificateTransferCommand(input, context);
    };
    RejectCertificateTransferCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RejectCertificateTransferCommand(output, context);
    };
    return RejectCertificateTransferCommand;
}($Command));
export { RejectCertificateTransferCommand };
//# sourceMappingURL=RejectCertificateTransferCommand.js.map