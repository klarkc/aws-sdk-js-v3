import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { SetLoadBalancerListenerSSLCertificateInput, SetLoadBalancerListenerSSLCertificateOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetLoadBalancerListenerSSLCertificateCommandInput extends SetLoadBalancerListenerSSLCertificateInput {
}
export interface SetLoadBalancerListenerSSLCertificateCommandOutput extends SetLoadBalancerListenerSSLCertificateOutput, __MetadataBearer {
}
/**
 * <p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p>
 *
 *         <p>For more information about updating your SSL certificate, see
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a>
 *                 in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, SetLoadBalancerListenerSSLCertificateCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, SetLoadBalancerListenerSSLCertificateCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new SetLoadBalancerListenerSSLCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetLoadBalancerListenerSSLCertificateCommandInput} for command's `input` shape.
 * @see {@link SetLoadBalancerListenerSSLCertificateCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetLoadBalancerListenerSSLCertificateCommand extends $Command<SetLoadBalancerListenerSSLCertificateCommandInput, SetLoadBalancerListenerSSLCertificateCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: SetLoadBalancerListenerSSLCertificateCommandInput;
    constructor(input: SetLoadBalancerListenerSSLCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetLoadBalancerListenerSSLCertificateCommandInput, SetLoadBalancerListenerSSLCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
