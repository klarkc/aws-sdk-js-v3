import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribePublicIpv4PoolsRequest, DescribePublicIpv4PoolsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePublicIpv4PoolsCommandInput extends DescribePublicIpv4PoolsRequest {
}
export interface DescribePublicIpv4PoolsCommandOutput extends DescribePublicIpv4PoolsResult, __MetadataBearer {
}
/**
 * <p>Describes the specified IPv4 address pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePublicIpv4PoolsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePublicIpv4PoolsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribePublicIpv4PoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePublicIpv4PoolsCommandInput} for command's `input` shape.
 * @see {@link DescribePublicIpv4PoolsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePublicIpv4PoolsCommand extends $Command<DescribePublicIpv4PoolsCommandInput, DescribePublicIpv4PoolsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribePublicIpv4PoolsCommandInput;
    constructor(input: DescribePublicIpv4PoolsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePublicIpv4PoolsCommandInput, DescribePublicIpv4PoolsCommandOutput>;
    private serialize;
    private deserialize;
}
