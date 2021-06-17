import { __extends } from "tslib";
import { DeleteCertificateRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteCertificateCommand, serializeAws_restJson1DeleteCertificateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified certificate.</p>
 *          <p>A certificate cannot be deleted if it has a policy or IoT thing attached to it or if
 *          its status is set to ACTIVE. To delete a certificate, first use the <a>DetachPrincipalPolicy</a> API to detach all policies. Next, use the <a>UpdateCertificate</a> API to set the certificate to the INACTIVE
 *          status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCertificateCommand = /** @class */ (function (_super) {
    __extends(DeleteCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCertificateCommand(input) {
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
    DeleteCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteCertificateCommand(input, context);
    };
    DeleteCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteCertificateCommand(output, context);
    };
    return DeleteCertificateCommand;
}($Command));
export { DeleteCertificateCommand };
//# sourceMappingURL=DeleteCertificateCommand.js.map