import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeClassicLinkInstancesRequest, DescribeClassicLinkInstancesResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClassicLinkInstancesCommandInput extends DescribeClassicLinkInstancesRequest {
}
export interface DescribeClassicLinkInstancesCommandOutput extends DescribeClassicLinkInstancesResult, __MetadataBearer {
}
/**
 * <p>Describes one or more of your linked EC2-Classic instances. This request only returns
 * 			information about EC2-Classic instances linked to a VPC through ClassicLink. You cannot
 * 			use this request to return information about other instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClassicLinkInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClassicLinkInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeClassicLinkInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClassicLinkInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeClassicLinkInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClassicLinkInstancesCommand extends $Command<DescribeClassicLinkInstancesCommandInput, DescribeClassicLinkInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeClassicLinkInstancesCommandInput;
    constructor(input: DescribeClassicLinkInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClassicLinkInstancesCommandInput, DescribeClassicLinkInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
