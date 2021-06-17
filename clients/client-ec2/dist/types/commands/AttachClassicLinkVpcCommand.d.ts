import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AttachClassicLinkVpcRequest, AttachClassicLinkVpcResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AttachClassicLinkVpcCommandInput extends AttachClassicLinkVpcRequest {
}
export interface AttachClassicLinkVpcCommandOutput extends AttachClassicLinkVpcResult, __MetadataBearer {
}
/**
 * <p>Links an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC's
 * 			security groups. You cannot link an EC2-Classic instance to more than one VPC at a time. You
 * 			can only link an instance that's in the <code>running</code> state. An instance is
 * 			automatically unlinked from a VPC when it's stopped - you can link it to the VPC again when
 * 			you restart it.</p>
 * 		       <p>After you've linked an instance, you cannot change the VPC security groups that are associated with it. To change the security groups, you must first unlink the instance, and then link it again.</p>
 * 		       <p>Linking your instance to a VPC is sometimes referred to as <i>attaching</i> your instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachClassicLinkVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachClassicLinkVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AttachClassicLinkVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachClassicLinkVpcCommandInput} for command's `input` shape.
 * @see {@link AttachClassicLinkVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AttachClassicLinkVpcCommand extends $Command<AttachClassicLinkVpcCommandInput, AttachClassicLinkVpcCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AttachClassicLinkVpcCommandInput;
    constructor(input: AttachClassicLinkVpcCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachClassicLinkVpcCommandInput, AttachClassicLinkVpcCommandOutput>;
    private serialize;
    private deserialize;
}
