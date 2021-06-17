import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeImageAttributeRequest, ImageAttribute } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeImageAttributeCommandInput extends DescribeImageAttributeRequest {
}
export interface DescribeImageAttributeCommandOutput extends ImageAttribute, __MetadataBearer {
}
/**
 * <p>Describes the specified attribute of the specified AMI. You can specify only one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeImageAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImageAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeImageAttributeCommand extends $Command<DescribeImageAttributeCommandInput, DescribeImageAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeImageAttributeCommandInput;
    constructor(input: DescribeImageAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImageAttributeCommandInput, DescribeImageAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
