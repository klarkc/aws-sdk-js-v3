import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateIamInstanceProfileRequest, AssociateIamInstanceProfileResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateIamInstanceProfileCommandInput extends AssociateIamInstanceProfileRequest {
}
export interface AssociateIamInstanceProfileCommandOutput extends AssociateIamInstanceProfileResult, __MetadataBearer {
}
/**
 * <p>Associates an IAM instance profile with a running or stopped instance. You cannot
 *             associate more than one IAM instance profile with an instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateIamInstanceProfileCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateIamInstanceProfileCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateIamInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateIamInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link AssociateIamInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateIamInstanceProfileCommand extends $Command<AssociateIamInstanceProfileCommandInput, AssociateIamInstanceProfileCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateIamInstanceProfileCommandInput;
    constructor(input: AssociateIamInstanceProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateIamInstanceProfileCommandInput, AssociateIamInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
