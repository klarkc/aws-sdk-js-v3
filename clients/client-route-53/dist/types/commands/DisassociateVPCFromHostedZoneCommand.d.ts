import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DisassociateVPCFromHostedZoneRequest, DisassociateVPCFromHostedZoneResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateVPCFromHostedZoneCommandInput extends DisassociateVPCFromHostedZoneRequest {
}
export interface DisassociateVPCFromHostedZoneCommandOutput extends DisassociateVPCFromHostedZoneResponse, __MetadataBearer {
}
/**
 * <p>Disassociates an Amazon Virtual Private Cloud (Amazon VPC) from an Amazon Route 53 private hosted zone. Note the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>You can't disassociate the last Amazon VPC from a private hosted zone.</p>
 *             </li>
 *             <li>
 *                <p>You can't convert a private hosted zone into a public hosted zone.</p>
 *             </li>
 *             <li>
 *                <p>You can submit a <code>DisassociateVPCFromHostedZone</code> request using either the account
 * 				that created the hosted zone or the account that created the Amazon VPC.</p>
 *             </li>
 *             <li>
 *                <p>Some services, such as AWS Cloud Map and Amazon Elastic File System (Amazon EFS) automatically create hosted zones and associate
 * 				VPCs with the hosted zones. A service can create a hosted zone using your account or using its own account.
 * 				You can disassociate a VPC from a hosted zone only if the service created the hosted zone using your account.</p>
 * 				           <p>When you run <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByVPC.html">DisassociateVPCFromHostedZone</a>,
 * 					if the hosted zone has a value for <code>OwningAccount</code>, you can use <code>DisassociateVPCFromHostedZone</code>.
 * 					If the hosted zone has a value for <code>OwningService</code>, you can't use <code>DisassociateVPCFromHostedZone</code>.</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DisassociateVPCFromHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DisassociateVPCFromHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DisassociateVPCFromHostedZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateVPCFromHostedZoneCommandInput} for command's `input` shape.
 * @see {@link DisassociateVPCFromHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateVPCFromHostedZoneCommand extends $Command<DisassociateVPCFromHostedZoneCommandInput, DisassociateVPCFromHostedZoneCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DisassociateVPCFromHostedZoneCommandInput;
    constructor(input: DisassociateVPCFromHostedZoneCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateVPCFromHostedZoneCommandInput, DisassociateVPCFromHostedZoneCommandOutput>;
    private serialize;
    private deserialize;
}
