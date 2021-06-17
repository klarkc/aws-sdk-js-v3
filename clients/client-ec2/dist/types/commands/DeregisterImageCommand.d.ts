import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeregisterImageRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterImageCommandInput extends DeregisterImageRequest {
}
export interface DeregisterImageCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deregisters the specified AMI. After you deregister an AMI, it can't be used to launch
 * 			new instances; however, it doesn't affect any instances that you've already launched
 * 			from the AMI. You'll continue to incur usage costs for those instances until you
 * 			terminate them.</p>
 *          <p>When you deregister an Amazon EBS-backed AMI, it doesn't affect the snapshot that was
 * 			created for the root volume of the instance during the AMI creation process. When you
 * 			deregister an instance store-backed AMI, it doesn't affect the files that you uploaded
 * 			to Amazon S3 when you created the AMI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeregisterImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterImageCommandInput} for command's `input` shape.
 * @see {@link DeregisterImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterImageCommand extends $Command<DeregisterImageCommandInput, DeregisterImageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeregisterImageCommandInput;
    constructor(input: DeregisterImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterImageCommandInput, DeregisterImageCommandOutput>;
    private serialize;
    private deserialize;
}
