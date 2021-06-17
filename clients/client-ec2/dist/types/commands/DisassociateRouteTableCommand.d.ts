import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateRouteTableRequest } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateRouteTableCommandInput extends DisassociateRouteTableRequest {
}
export interface DisassociateRouteTableCommandOutput extends __MetadataBearer {
}
/**
 * <p>Disassociates a subnet or gateway from a route table.</p>
 * 		       <p>After you perform this action, the subnet no longer uses the routes in the route table.
 * 				Instead, it uses the routes in the VPC's main route table. For more information
 * 				about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route
 * 				Tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateRouteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateRouteTableCommandInput} for command's `input` shape.
 * @see {@link DisassociateRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateRouteTableCommand extends $Command<DisassociateRouteTableCommandInput, DisassociateRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisassociateRouteTableCommandInput;
    constructor(input: DisassociateRouteTableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateRouteTableCommandInput, DisassociateRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}
