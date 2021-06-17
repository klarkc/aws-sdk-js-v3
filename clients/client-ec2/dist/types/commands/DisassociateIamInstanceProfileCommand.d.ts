import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateIamInstanceProfileRequest, DisassociateIamInstanceProfileResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateIamInstanceProfileCommandInput extends DisassociateIamInstanceProfileRequest {
}
export interface DisassociateIamInstanceProfileCommandOutput extends DisassociateIamInstanceProfileResult, __MetadataBearer {
}
/**
 * <p>Disassociates an IAM instance profile from a running or stopped instance.</p>
 *         <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association
 *             ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateIamInstanceProfileCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateIamInstanceProfileCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateIamInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateIamInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link DisassociateIamInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateIamInstanceProfileCommand extends $Command<DisassociateIamInstanceProfileCommandInput, DisassociateIamInstanceProfileCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisassociateIamInstanceProfileCommandInput;
    constructor(input: DisassociateIamInstanceProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateIamInstanceProfileCommandInput, DisassociateIamInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
