import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { TerminateInstancesRequest, TerminateInstancesResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TerminateInstancesCommandInput extends TerminateInstancesRequest {
}
export interface TerminateInstancesCommandOutput extends TerminateInstancesResult, __MetadataBearer {
}
/**
 * <p>Shuts down the specified instances. This operation is idempotent; if you terminate an
 *             instance more than once, each call succeeds. </p>
 *         <p>If you specify multiple instances and the request fails (for example, because of a
 *             single incorrect instance ID), none of the instances are terminated.</p>
 *         <p>Terminated instances remain visible after termination (for approximately one
 *             hour).</p>
 *         <p>By default, Amazon EC2 deletes all EBS volumes that were attached when the instance
 *             launched. Volumes attached after instance launch continue running.</p>
 *         <p>You can stop, start, and terminate EBS-backed instances. You can only terminate
 *             instance store-backed instances. What happens to an instance differs if you stop it or
 *             terminate it. For example, when you stop an instance, the root device and any other
 *             devices attached to the instance persist. When you terminate an instance, any attached
 *             EBS volumes with the <code>DeleteOnTermination</code> block device mapping parameter set
 *             to <code>true</code> are automatically deleted. For more information about the
 *             differences between stopping and terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a>
 *             in the <i>Amazon EC2 User Guide</i>.</p>
 *         <p>For more information about troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesShuttingDown.html">Troubleshooting terminating your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, TerminateInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, TerminateInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new TerminateInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateInstancesCommandInput} for command's `input` shape.
 * @see {@link TerminateInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TerminateInstancesCommand extends $Command<TerminateInstancesCommandInput, TerminateInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: TerminateInstancesCommandInput;
    constructor(input: TerminateInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateInstancesCommandInput, TerminateInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
