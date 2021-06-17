import { __extends } from "tslib";
import { DeleteCertificateRequest, DeleteCertificateResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteCertificateCommand, serializeAws_json1_1DeleteCertificateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an SSL/TLS certificate for your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>Certificates that are currently attached to a distribution cannot be deleted. Use the
 *         <code>DetachCertificateFromDistribution</code> action to detach a certificate from a
 *       distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteCertificateCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteCertificateCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "LightsailClient";
        var commandName = "DeleteCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCertificateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteCertificateCommand(input, context);
    };
    DeleteCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteCertificateCommand(output, context);
    };
    return DeleteCertificateCommand;
}($Command));
export { DeleteCertificateCommand };
//# sourceMappingURL=DeleteCertificateCommand.js.map