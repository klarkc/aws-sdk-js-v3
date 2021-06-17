import { __extends } from "tslib";
import { TransferCertificateRequest, TransferCertificateResponse } from "../models/models_2";
import { deserializeAws_restJson1TransferCertificateCommand, serializeAws_restJson1TransferCertificateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Transfers the specified certificate to the specified AWS account.</p>
 *          <p>You can cancel the transfer until it is acknowledged by the recipient.</p>
 *          <p>No notification is sent to the transfer destination's account. It is up to the caller
 *          to notify the transfer target.</p>
 *          <p>The certificate being transferred must not be in the ACTIVE state. You can use the
 *          UpdateCertificate API to deactivate it.</p>
 *          <p>The certificate must not have any policies attached to it. You can use the
 *          DetachPrincipalPolicy API to detach them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, TransferCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, TransferCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new TransferCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TransferCertificateCommandInput} for command's `input` shape.
 * @see {@link TransferCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TransferCertificateCommand = /** @class */ (function (_super) {
    __extends(TransferCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TransferCertificateCommand(input) {
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
    TransferCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "TransferCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TransferCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TransferCertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TransferCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1TransferCertificateCommand(input, context);
    };
    TransferCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1TransferCertificateCommand(output, context);
    };
    return TransferCertificateCommand;
}($Command));
export { TransferCertificateCommand };
//# sourceMappingURL=TransferCertificateCommand.js.map