import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReleaseAddressRequest } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ReleaseAddressCommandInput extends ReleaseAddressRequest {
}
export interface ReleaseAddressCommandOutput extends __MetadataBearer {
}
/**
 * <p>Releases the specified Elastic IP address.</p>
 *          <p>[EC2-Classic, default VPC] Releasing an Elastic IP address automatically disassociates it
 * 				from any instance that it's associated with. To disassociate an Elastic IP address without
 * 				releasing it, use <a>DisassociateAddress</a>.</p>
 *          <p>[Nondefault VPC] You must use <a>DisassociateAddress</a> to disassociate the Elastic IP address
 * 			  before you can release it. Otherwise, Amazon EC2 returns an error (<code>InvalidIPAddress.InUse</code>).</p>
 *          <p>After releasing an Elastic IP address, it is released to the IP address pool.
 *         Be sure to update your DNS records and any servers or devices that communicate with the address.
 *         If you attempt to release an Elastic IP address that you already released, you'll get an
 *         <code>AuthFailure</code> error if the address is already allocated to another AWS account.</p>
 *          <p>[EC2-VPC] After you release an Elastic IP address for use in a VPC, you might be able to recover it.
 *         For more information, see <a>AllocateAddress</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReleaseAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReleaseAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReleaseAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReleaseAddressCommandInput} for command's `input` shape.
 * @see {@link ReleaseAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ReleaseAddressCommand extends $Command<ReleaseAddressCommandInput, ReleaseAddressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ReleaseAddressCommandInput;
    constructor(input: ReleaseAddressCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReleaseAddressCommandInput, ReleaseAddressCommandOutput>;
    private serialize;
    private deserialize;
}
