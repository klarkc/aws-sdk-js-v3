import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcsRequest, DescribeVpcsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeVpcsCommandInput extends DescribeVpcsRequest {
}
export interface DescribeVpcsCommandOutput extends DescribeVpcsResult, __MetadataBearer {
}
/**
 * <p>Describes one or more of your VPCs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeVpcsCommand extends $Command<DescribeVpcsCommandInput, DescribeVpcsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpcsCommandInput;
    constructor(input: DescribeVpcsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcsCommandInput, DescribeVpcsCommandOutput>;
    private serialize;
    private deserialize;
}
