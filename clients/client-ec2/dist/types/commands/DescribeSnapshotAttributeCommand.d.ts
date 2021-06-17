import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSnapshotAttributeRequest, DescribeSnapshotAttributeResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSnapshotAttributeCommandInput extends DescribeSnapshotAttributeRequest {
}
export interface DescribeSnapshotAttributeCommandOutput extends DescribeSnapshotAttributeResult, __MetadataBearer {
}
/**
 * <p>Describes the specified attribute of the specified snapshot. You can specify only one
 *       attribute at a time.</p>
 *          <p>For more information about EBS snapshots, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html">Amazon EBS snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSnapshotAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSnapshotAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSnapshotAttributeCommand extends $Command<DescribeSnapshotAttributeCommandInput, DescribeSnapshotAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSnapshotAttributeCommandInput;
    constructor(input: DescribeSnapshotAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSnapshotAttributeCommandInput, DescribeSnapshotAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
