"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachLoadBalancerTlsCertificateCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class AttachLoadBalancerTlsCertificateCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "LightsailClient";
        const commandName = "AttachLoadBalancerTlsCertificateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AttachLoadBalancerTlsCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AttachLoadBalancerTlsCertificateResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand(output, context);
    }
}
exports.AttachLoadBalancerTlsCertificateCommand = AttachLoadBalancerTlsCertificateCommand;
//# sourceMappingURL=AttachLoadBalancerTlsCertificateCommand.js.map