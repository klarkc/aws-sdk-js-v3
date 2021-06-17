import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVpcEndpointsRequest, DeleteVpcEndpointsResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVpcEndpointsCommandInput extends DeleteVpcEndpointsRequest {
}
export interface DeleteVpcEndpointsCommandOutput extends DeleteVpcEndpointsResult, __MetadataBearer {
}
/**
 * <p>Deletes one or more specified VPC endpoints. You can delete any of the following types of VPC endpoints.  </p>
 *         <ul>
 *             <li>
 *                <p>Gateway endpoint,</p>
 *             </li>
 *             <li>
 *                <p>Gateway Load Balancer endpoint,</p>
 *             </li>
 *             <li>
 *                <p>Interface endpoint</p>
 *             </li>
 *          </ul>
 *         <p>The following rules apply when you delete a VPC endpoint:</p>
 *         <ul>
 *             <li>
 *                 <p>When you delete a gateway endpoint, we delete the endpoint routes in the route tables that are associated with the endpoint.</p>
 *             </li>
 *             <li>
 *                 <p>When you delete a Gateway Load Balancer endpoint, we delete the endpoint network interfaces. </p>
 *                 <p>You can only delete Gateway Load Balancer endpoints when the routes that are associated with the endpoint are deleted.</p>
 *             </li>
 *             <li>
 *                 <p>When you delete an interface endpoint, we delete the  endpoint network interfaces.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVpcEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcEndpointsCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVpcEndpointsCommand extends $Command<DeleteVpcEndpointsCommandInput, DeleteVpcEndpointsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteVpcEndpointsCommandInput;
    constructor(input: DeleteVpcEndpointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVpcEndpointsCommandInput, DeleteVpcEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
