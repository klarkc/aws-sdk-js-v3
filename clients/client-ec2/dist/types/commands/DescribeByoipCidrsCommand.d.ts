import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeByoipCidrsRequest, DescribeByoipCidrsResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeByoipCidrsCommandInput extends DescribeByoipCidrsRequest {
}
export interface DescribeByoipCidrsCommandOutput extends DescribeByoipCidrsResult, __MetadataBearer {
}
/**
 * <p>Describes the IP address ranges that were specified in calls to <a>ProvisionByoipCidr</a>.</p>
 *          <p>To describe the address pools that were created when you provisioned the address
 *           ranges, use <a>DescribePublicIpv4Pools</a> or <a>DescribeIpv6Pools</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeByoipCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeByoipCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeByoipCidrsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeByoipCidrsCommandInput} for command's `input` shape.
 * @see {@link DescribeByoipCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeByoipCidrsCommand extends $Command<DescribeByoipCidrsCommandInput, DescribeByoipCidrsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeByoipCidrsCommandInput;
    constructor(input: DescribeByoipCidrsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeByoipCidrsCommandInput, DescribeByoipCidrsCommandOutput>;
    private serialize;
    private deserialize;
}
