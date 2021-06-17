import { __extends } from "tslib";
import { CancelCertificateTransferRequest } from "../models/models_0";
import { deserializeAws_restJson1CancelCertificateTransferCommand, serializeAws_restJson1CancelCertificateTransferCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels a pending transfer for the specified certificate.</p>
 *          <p>
 *             <b>Note</b> Only the transfer source account can use this
 *          operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, AWS IoT returns the
 *          certificate to the source account in the INACTIVE state. After the destination account has
 *          accepted the transfer, the transfer cannot be cancelled.</p>
 *          <p>After a certificate transfer is cancelled, the status of the certificate changes from
 *          PENDING_TRANSFER to INACTIVE.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelCertificateTransferCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelCertificateTransferCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CancelCertificateTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelCertificateTransferCommandInput} for command's `input` shape.
 * @see {@link CancelCertificateTransferCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelCertificateTransferCommand = /** @class */ (function (_super) {
    __extends(CancelCertificateTransferCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelCertificateTransferCommand(input) {
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
    CancelCertificateTransferCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CancelCertificateTransferCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelCertificateTransferRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelCertificateTransferCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelCertificateTransferCommand(input, context);
    };
    CancelCertificateTransferCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelCertificateTransferCommand(output, context);
    };
    return CancelCertificateTransferCommand;
}($Command));
export { CancelCertificateTransferCommand };
//# sourceMappingURL=CancelCertificateTransferCommand.js.map