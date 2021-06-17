import { ElasticLoadBalancingV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingV2Client";
import { SetSecurityGroupsInput, SetSecurityGroupsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetSecurityGroupsCommandInput extends SetSecurityGroupsInput {
}
export interface SetSecurityGroupsCommandOutput extends SetSecurityGroupsOutput, __MetadataBearer {
}
/**
 * <p>Associates the specified security groups with the specified Application Load Balancer. The
 *       specified security groups override the previously associated security groups.</p>
 *          <p>You can't specify a security group for a Network Load Balancer or Gateway Load
 *       Balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, SetSecurityGroupsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, SetSecurityGroupsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new SetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link SetSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetSecurityGroupsCommand extends $Command<SetSecurityGroupsCommandInput, SetSecurityGroupsCommandOutput, ElasticLoadBalancingV2ClientResolvedConfig> {
    readonly input: SetSecurityGroupsCommandInput;
    constructor(input: SetSecurityGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetSecurityGroupsCommandInput, SetSecurityGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
