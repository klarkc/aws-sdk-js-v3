import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { AttachLoadBalancerTlsCertificateRequest, AttachLoadBalancerTlsCertificateResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AttachLoadBalancerTlsCertificateCommandInput extends AttachLoadBalancerTlsCertificateRequest {
}
export interface AttachLoadBalancerTlsCertificateCommandOutput extends AttachLoadBalancerTlsCertificateResult, __MetadataBearer {
}
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
export declare class AttachLoadBalancerTlsCertificateCommand extends $Command<AttachLoadBalancerTlsCertificateCommandInput, AttachLoadBalancerTlsCertificateCommandOutput, LightsailClientResolvedConfig> {
    readonly input: AttachLoadBalancerTlsCertificateCommandInput;
    constructor(input: AttachLoadBalancerTlsCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachLoadBalancerTlsCertificateCommandInput, AttachLoadBalancerTlsCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
