import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { ConfigureHealthCheckInput, ConfigureHealthCheckOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ConfigureHealthCheckCommandInput extends ConfigureHealthCheckInput {
}
export interface ConfigureHealthCheckCommandOutput extends ConfigureHealthCheckOutput, __MetadataBearer {
}
/**
 * <p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, ConfigureHealthCheckCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, ConfigureHealthCheckCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new ConfigureHealthCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfigureHealthCheckCommandInput} for command's `input` shape.
 * @see {@link ConfigureHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ConfigureHealthCheckCommand extends $Command<ConfigureHealthCheckCommandInput, ConfigureHealthCheckCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: ConfigureHealthCheckCommandInput;
    constructor(input: ConfigureHealthCheckCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfigureHealthCheckCommandInput, ConfigureHealthCheckCommandOutput>;
    private serialize;
    private deserialize;
}
