import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { MoveAddressToVpcRequest, MoveAddressToVpcResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface MoveAddressToVpcCommandInput extends MoveAddressToVpcRequest {
}
export interface MoveAddressToVpcCommandOutput extends MoveAddressToVpcResult, __MetadataBearer {
}
/**
 * <p>Moves an Elastic IP address from the EC2-Classic platform to the EC2-VPC platform. The
 *       Elastic IP address must be allocated to your account for more than 24 hours, and it must not
 *       be associated with an instance. After the Elastic IP address is moved, it is no longer
 *       available for use in the EC2-Classic platform, unless you move it back using the
 *         <a>RestoreAddressToClassic</a> request. You cannot move an Elastic IP address that was
 *       originally allocated for use in the EC2-VPC platform to the EC2-Classic platform. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, MoveAddressToVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, MoveAddressToVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new MoveAddressToVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MoveAddressToVpcCommandInput} for command's `input` shape.
 * @see {@link MoveAddressToVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class MoveAddressToVpcCommand extends $Command<MoveAddressToVpcCommandInput, MoveAddressToVpcCommandOutput, EC2ClientResolvedConfig> {
    readonly input: MoveAddressToVpcCommandInput;
    constructor(input: MoveAddressToVpcCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MoveAddressToVpcCommandInput, MoveAddressToVpcCommandOutput>;
    private serialize;
    private deserialize;
}
