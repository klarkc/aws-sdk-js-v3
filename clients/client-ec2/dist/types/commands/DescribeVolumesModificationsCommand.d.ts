import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVolumesModificationsRequest, DescribeVolumesModificationsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeVolumesModificationsCommandInput extends DescribeVolumesModificationsRequest {
}
export interface DescribeVolumesModificationsCommandOutput extends DescribeVolumesModificationsResult, __MetadataBearer {
}
/**
 * <p>Describes the most recent volume modification request for the specified EBS volumes.</p>
 *          <p>If a volume has never been modified, some information in the output will be null.
 *       If a volume has been modified more than once, the output includes only the most
 *       recent modification request.</p>
 *          <p>You can also use CloudWatch Events to check the status of a modification to an EBS
 *       volume. For information about CloudWatch Events, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/">Amazon CloudWatch Events User Guide</a>. For more information, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html#monitoring_mods">Monitoring volume modifications</a> in the
 *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVolumesModificationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVolumesModificationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVolumesModificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVolumesModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVolumesModificationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeVolumesModificationsCommand extends $Command<DescribeVolumesModificationsCommandInput, DescribeVolumesModificationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVolumesModificationsCommandInput;
    constructor(input: DescribeVolumesModificationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVolumesModificationsCommandInput, DescribeVolumesModificationsCommandOutput>;
    private serialize;
    private deserialize;
}
