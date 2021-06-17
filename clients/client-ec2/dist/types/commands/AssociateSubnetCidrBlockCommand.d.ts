import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateSubnetCidrBlockRequest, AssociateSubnetCidrBlockResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateSubnetCidrBlockCommandInput extends AssociateSubnetCidrBlockRequest {
}
export interface AssociateSubnetCidrBlockCommandOutput extends AssociateSubnetCidrBlockResult, __MetadataBearer {
}
/**
 * <p>Associates a CIDR block with your subnet. You can only associate a single IPv6 CIDR
 *             block with your subnet. An IPv6 CIDR block must have a prefix length of /64.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateSubnetCidrBlockCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateSubnetCidrBlockCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateSubnetCidrBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSubnetCidrBlockCommandInput} for command's `input` shape.
 * @see {@link AssociateSubnetCidrBlockCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateSubnetCidrBlockCommand extends $Command<AssociateSubnetCidrBlockCommandInput, AssociateSubnetCidrBlockCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateSubnetCidrBlockCommandInput;
    constructor(input: AssociateSubnetCidrBlockCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateSubnetCidrBlockCommandInput, AssociateSubnetCidrBlockCommandOutput>;
    private serialize;
    private deserialize;
}
