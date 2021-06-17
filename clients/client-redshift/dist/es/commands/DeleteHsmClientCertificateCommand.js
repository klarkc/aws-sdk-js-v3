import { __extends } from "tslib";
import { DeleteHsmClientCertificateMessage } from "../models/models_0";
import { deserializeAws_queryDeleteHsmClientCertificateCommand, serializeAws_queryDeleteHsmClientCertificateCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified HSM client certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteHsmClientCertificateCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteHsmClientCertificateCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteHsmClientCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHsmClientCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteHsmClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteHsmClientCertificateCommand = /** @class */ (function (_super) {
    __extends(DeleteHsmClientCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteHsmClientCertificateCommand(input) {
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
    DeleteHsmClientCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DeleteHsmClientCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteHsmClientCertificateMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteHsmClientCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteHsmClientCertificateCommand(input, context);
    };
    DeleteHsmClientCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteHsmClientCertificateCommand(output, context);
    };
    return DeleteHsmClientCertificateCommand;
}($Command));
export { DeleteHsmClientCertificateCommand };
//# sourceMappingURL=DeleteHsmClientCertificateCommand.js.map