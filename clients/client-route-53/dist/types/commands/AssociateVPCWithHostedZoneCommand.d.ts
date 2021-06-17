import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { AssociateVPCWithHostedZoneRequest, AssociateVPCWithHostedZoneResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateVPCWithHostedZoneCommandInput extends AssociateVPCWithHostedZoneRequest {
}
export interface AssociateVPCWithHostedZoneCommandOutput extends AssociateVPCWithHostedZoneResponse, __MetadataBearer {
}
/**
 * <p>Associates an Amazon VPC with a private hosted zone. </p>
 * 		       <important>
 *             <p>To perform the association, the VPC and the private hosted zone must already exist.
 * 			You can't convert a public hosted zone into a private hosted zone.</p>
 *          </important>
 * 		       <note>
 *             <p>If you want to associate a VPC that was created by using one AWS account with a private hosted zone that was created
 * 			by using a different account, the AWS account that created the private hosted zone must first submit a
 * 			<code>CreateVPCAssociationAuthorization</code> request. Then the account that created the VPC must submit an
 * 			<code>AssociateVPCWithHostedZone</code> request.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, AssociateVPCWithHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, AssociateVPCWithHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new AssociateVPCWithHostedZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateVPCWithHostedZoneCommandInput} for command's `input` shape.
 * @see {@link AssociateVPCWithHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateVPCWithHostedZoneCommand extends $Command<AssociateVPCWithHostedZoneCommandInput, AssociateVPCWithHostedZoneCommandOutput, Route53ClientResolvedConfig> {
    readonly input: AssociateVPCWithHostedZoneCommandInput;
    constructor(input: AssociateVPCWithHostedZoneCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateVPCWithHostedZoneCommandInput, AssociateVPCWithHostedZoneCommandOutput>;
    private serialize;
    private deserialize;
}
