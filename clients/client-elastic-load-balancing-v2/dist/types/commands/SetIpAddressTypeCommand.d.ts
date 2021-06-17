import { ElasticLoadBalancingV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingV2Client";
import { SetIpAddressTypeInput, SetIpAddressTypeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetIpAddressTypeCommandInput extends SetIpAddressTypeInput {
}
export interface SetIpAddressTypeCommandOutput extends SetIpAddressTypeOutput, __MetadataBearer {
}
/**
 * <p>Sets the type of IP addresses used by the subnets of the specified Application Load
 *       Balancer or Network Load Balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, SetIpAddressTypeCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, SetIpAddressTypeCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new SetIpAddressTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetIpAddressTypeCommandInput} for command's `input` shape.
 * @see {@link SetIpAddressTypeCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetIpAddressTypeCommand extends $Command<SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput, ElasticLoadBalancingV2ClientResolvedConfig> {
    readonly input: SetIpAddressTypeCommandInput;
    constructor(input: SetIpAddressTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput>;
    private serialize;
    private deserialize;
}
