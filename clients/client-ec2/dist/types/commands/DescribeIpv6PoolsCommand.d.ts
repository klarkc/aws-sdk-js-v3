import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeIpv6PoolsRequest, DescribeIpv6PoolsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeIpv6PoolsCommandInput extends DescribeIpv6PoolsRequest {
}
export interface DescribeIpv6PoolsCommandOutput extends DescribeIpv6PoolsResult, __MetadataBearer {
}
/**
 * <p>Describes your IPv6 address pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpv6PoolsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpv6PoolsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeIpv6PoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIpv6PoolsCommandInput} for command's `input` shape.
 * @see {@link DescribeIpv6PoolsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeIpv6PoolsCommand extends $Command<DescribeIpv6PoolsCommandInput, DescribeIpv6PoolsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeIpv6PoolsCommandInput;
    constructor(input: DescribeIpv6PoolsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIpv6PoolsCommandInput, DescribeIpv6PoolsCommandOutput>;
    private serialize;
    private deserialize;
}
