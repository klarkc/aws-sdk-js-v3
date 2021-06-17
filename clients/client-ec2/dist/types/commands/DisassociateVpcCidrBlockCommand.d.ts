import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateVpcCidrBlockRequest, DisassociateVpcCidrBlockResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateVpcCidrBlockCommandInput extends DisassociateVpcCidrBlockRequest {
}
export interface DisassociateVpcCidrBlockCommandOutput extends DisassociateVpcCidrBlockResult, __MetadataBearer {
}
/**
 * <p>Disassociates a CIDR block from a VPC. To disassociate the CIDR block, you must
 *             specify its association ID. You can get the association ID by using
 *                 <a>DescribeVpcs</a>. You must detach or delete all gateways and resources that
 *             are associated with the CIDR block before you can disassociate it. </p>
 * 		       <p>You cannot disassociate the CIDR block with which you originally created the VPC (the
 * 			primary CIDR block).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateVpcCidrBlockCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateVpcCidrBlockCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateVpcCidrBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateVpcCidrBlockCommandInput} for command's `input` shape.
 * @see {@link DisassociateVpcCidrBlockCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateVpcCidrBlockCommand extends $Command<DisassociateVpcCidrBlockCommandInput, DisassociateVpcCidrBlockCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisassociateVpcCidrBlockCommandInput;
    constructor(input: DisassociateVpcCidrBlockCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateVpcCidrBlockCommandInput, DisassociateVpcCidrBlockCommandOutput>;
    private serialize;
    private deserialize;
}
