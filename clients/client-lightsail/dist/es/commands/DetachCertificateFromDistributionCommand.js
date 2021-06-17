import { __extends } from "tslib";
import { DetachCertificateFromDistributionRequest, DetachCertificateFromDistributionResult } from "../models/models_0";
import { deserializeAws_json1_1DetachCertificateFromDistributionCommand, serializeAws_json1_1DetachCertificateFromDistributionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>After the certificate is detached, your distribution stops accepting traffic for all of
 *       the domains that are associated with the certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DetachCertificateFromDistributionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DetachCertificateFromDistributionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DetachCertificateFromDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachCertificateFromDistributionCommandInput} for command's `input` shape.
 * @see {@link DetachCertificateFromDistributionCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachCertificateFromDistributionCommand = /** @class */ (function (_super) {
    __extends(DetachCertificateFromDistributionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachCertificateFromDistributionCommand(input) {
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
    DetachCertificateFromDistributionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DetachCertificateFromDistributionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachCertificateFromDistributionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DetachCertificateFromDistributionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachCertificateFromDistributionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DetachCertificateFromDistributionCommand(input, context);
    };
    DetachCertificateFromDistributionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DetachCertificateFromDistributionCommand(output, context);
    };
    return DetachCertificateFromDistributionCommand;
}($Command));
export { DetachCertificateFromDistributionCommand };
//# sourceMappingURL=DetachCertificateFromDistributionCommand.js.map