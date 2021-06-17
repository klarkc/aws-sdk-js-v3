import { __extends } from "tslib";
import { AttachLoadBalancerTlsCertificateRequest, AttachLoadBalancerTlsCertificateResult } from "../models/models_0";
import { deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand, serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just
 *       an updated, more secure version of Secure Socket Layer (SSL).</p>
 *          <p>Once you create and validate your certificate, you can attach it to your load balancer.
 *       You can also use this API to rotate the certificates on your account. Use the
 *         <code>AttachLoadBalancerTlsCertificate</code> action with the non-attached certificate, and
 *       it will replace the existing one and become the attached certificate.</p>
 *          <p>The <code>AttachLoadBalancerTlsCertificate</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, AttachLoadBalancerTlsCertificateCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, AttachLoadBalancerTlsCertificateCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new AttachLoadBalancerTlsCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachLoadBalancerTlsCertificateCommandInput} for command's `input` shape.
 * @see {@link AttachLoadBalancerTlsCertificateCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachLoadBalancerTlsCertificateCommand = /** @class */ (function (_super) {
    __extends(AttachLoadBalancerTlsCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachLoadBalancerTlsCertificateCommand(input) {
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
    AttachLoadBalancerTlsCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "AttachLoadBalancerTlsCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachLoadBalancerTlsCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AttachLoadBalancerTlsCertificateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachLoadBalancerTlsCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand(input, context);
    };
    AttachLoadBalancerTlsCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand(output, context);
    };
    return AttachLoadBalancerTlsCertificateCommand;
}($Command));
export { AttachLoadBalancerTlsCertificateCommand };
//# sourceMappingURL=AttachLoadBalancerTlsCertificateCommand.js.map