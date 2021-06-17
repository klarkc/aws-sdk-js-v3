import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateRouteTableRequest, AssociateRouteTableResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateRouteTableCommandInput extends AssociateRouteTableRequest {
}
export interface AssociateRouteTableCommandOutput extends AssociateRouteTableResult, __MetadataBearer {
}
/**
 * <p>Associates a subnet in your VPC or an internet gateway or virtual private gateway
 *             attached to your VPC with a route table in your VPC. This association causes traffic
 *             from the subnet or gateway to be routed according to the routes in the route table. The
 *             action returns an association ID, which you need in order to disassociate the route
 *             table later. A route table can be associated with multiple subnets.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateRouteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateRouteTableCommandInput} for command's `input` shape.
 * @see {@link AssociateRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateRouteTableCommand extends $Command<AssociateRouteTableCommandInput, AssociateRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateRouteTableCommandInput;
    constructor(input: AssociateRouteTableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateRouteTableCommandInput, AssociateRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}
