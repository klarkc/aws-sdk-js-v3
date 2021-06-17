import { __extends } from "tslib";
import { AttachCertificateToDistributionRequest, AttachCertificateToDistributionResult } from "../models/models_0";
import { deserializeAws_json1_1AttachCertificateToDistributionCommand, serializeAws_json1_1AttachCertificateToDistributionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>After the certificate is attached, your distribution accepts HTTPS traffic for all of the
 *       domains that are associated with the certificate.</p>
 *          <p>Use the <code>CreateCertificate</code> action to create a certificate that you can attach
 *       to your distribution.</p>
 *          <important>
 *             <p>Only certificates created in the <code>us-east-1</code> AWS Region can be attached to
 *         Lightsail distributions. Lightsail distributions are global resources that can reference
 *         an origin in any AWS Region, and distribute its content globally. However, all
 *         distributions are located in the <code>us-east-1</code> Region.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, AttachCertificateToDistributionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, AttachCertificateToDistributionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new AttachCertificateToDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachCertificateToDistributionCommandInput} for command's `input` shape.
 * @see {@link AttachCertificateToDistributionCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachCertificateToDistributionCommand = /** @class */ (function (_super) {
    __extends(AttachCertificateToDistributionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachCertificateToDistributionCommand(input) {
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
    AttachCertificateToDistributionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "AttachCertificateToDistributionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachCertificateToDistributionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AttachCertificateToDistributionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachCertificateToDistributionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AttachCertificateToDistributionCommand(input, context);
    };
    AttachCertificateToDistributionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AttachCertificateToDistributionCommand(output, context);
    };
    return AttachCertificateToDistributionCommand;
}($Command));
export { AttachCertificateToDistributionCommand };
//# sourceMappingURL=AttachCertificateToDistributionCommand.js.map