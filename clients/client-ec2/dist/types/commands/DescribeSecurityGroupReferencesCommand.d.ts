import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSecurityGroupReferencesRequest, DescribeSecurityGroupReferencesResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSecurityGroupReferencesCommandInput extends DescribeSecurityGroupReferencesRequest {
}
export interface DescribeSecurityGroupReferencesCommandOutput extends DescribeSecurityGroupReferencesResult, __MetadataBearer {
}
/**
 * <p>[VPC only] Describes the VPCs on the other side of a VPC peering connection that are referencing the security groups you've specified in this request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSecurityGroupReferencesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSecurityGroupReferencesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSecurityGroupReferencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSecurityGroupReferencesCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityGroupReferencesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSecurityGroupReferencesCommand extends $Command<DescribeSecurityGroupReferencesCommandInput, DescribeSecurityGroupReferencesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSecurityGroupReferencesCommandInput;
    constructor(input: DescribeSecurityGroupReferencesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSecurityGroupReferencesCommandInput, DescribeSecurityGroupReferencesCommandOutput>;
    private serialize;
    private deserialize;
}
