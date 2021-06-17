import { ElasticLoadBalancingV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingV2Client";
import { DescribeListenerCertificatesInput, DescribeListenerCertificatesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeListenerCertificatesCommandInput extends DescribeListenerCertificatesInput {
}
export interface DescribeListenerCertificatesCommandOutput extends DescribeListenerCertificatesOutput, __MetadataBearer {
}
/**
 * <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS
 *       listener.</p>
 *          <p>If the default certificate is also in the certificate list, it appears twice in the
 *       results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set
 *       to false).</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or
 *         <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers
 *       Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeListenerCertificatesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeListenerCertificatesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DescribeListenerCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeListenerCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeListenerCertificatesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeListenerCertificatesCommand extends $Command<DescribeListenerCertificatesCommandInput, DescribeListenerCertificatesCommandOutput, ElasticLoadBalancingV2ClientResolvedConfig> {
    readonly input: DescribeListenerCertificatesCommandInput;
    constructor(input: DescribeListenerCertificatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeListenerCertificatesCommandInput, DescribeListenerCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
