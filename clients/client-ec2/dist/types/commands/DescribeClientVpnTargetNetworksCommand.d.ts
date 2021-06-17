import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeClientVpnTargetNetworksRequest, DescribeClientVpnTargetNetworksResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClientVpnTargetNetworksCommandInput extends DescribeClientVpnTargetNetworksRequest {
}
export interface DescribeClientVpnTargetNetworksCommandOutput extends DescribeClientVpnTargetNetworksResult, __MetadataBearer {
}
/**
 * <p>Describes the target networks associated with the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnTargetNetworksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnTargetNetworksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeClientVpnTargetNetworksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClientVpnTargetNetworksCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnTargetNetworksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClientVpnTargetNetworksCommand extends $Command<DescribeClientVpnTargetNetworksCommandInput, DescribeClientVpnTargetNetworksCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeClientVpnTargetNetworksCommandInput;
    constructor(input: DescribeClientVpnTargetNetworksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClientVpnTargetNetworksCommandInput, DescribeClientVpnTargetNetworksCommandOutput>;
    private serialize;
    private deserialize;
}
