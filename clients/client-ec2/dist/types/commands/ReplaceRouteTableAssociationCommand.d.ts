import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReplaceRouteTableAssociationRequest, ReplaceRouteTableAssociationResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ReplaceRouteTableAssociationCommandInput extends ReplaceRouteTableAssociationRequest {
}
export interface ReplaceRouteTableAssociationCommandOutput extends ReplaceRouteTableAssociationResult, __MetadataBearer {
}
/**
 * <p>Changes the route table associated with a given subnet, internet gateway, or virtual private gateway in a VPC. After the operation
 *       completes, the subnet or gateway uses the routes in the new route table. For more
 *       information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route
 *         Tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *          <p>You can also use this operation to change which table is the main route table in the VPC. Specify the main route table's association ID and the route table ID of the new main route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceRouteTableAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceRouteTableAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReplaceRouteTableAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplaceRouteTableAssociationCommandInput} for command's `input` shape.
 * @see {@link ReplaceRouteTableAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ReplaceRouteTableAssociationCommand extends $Command<ReplaceRouteTableAssociationCommandInput, ReplaceRouteTableAssociationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ReplaceRouteTableAssociationCommandInput;
    constructor(input: ReplaceRouteTableAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReplaceRouteTableAssociationCommandInput, ReplaceRouteTableAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
