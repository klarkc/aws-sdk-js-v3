import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcAttributeRequest, DescribeVpcAttributeResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeVpcAttributeCommandInput extends DescribeVpcAttributeRequest {
}
export interface DescribeVpcAttributeCommandOutput extends DescribeVpcAttributeResult, __MetadataBearer {
}
/**
 * <p>Describes the specified attribute of the specified VPC. You can specify only one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeVpcAttributeCommand extends $Command<DescribeVpcAttributeCommandInput, DescribeVpcAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpcAttributeCommandInput;
    constructor(input: DescribeVpcAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcAttributeCommandInput, DescribeVpcAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
