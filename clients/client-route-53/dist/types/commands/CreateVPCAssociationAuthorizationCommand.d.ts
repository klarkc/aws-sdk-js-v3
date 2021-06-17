import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateVPCAssociationAuthorizationRequest, CreateVPCAssociationAuthorizationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateVPCAssociationAuthorizationCommandInput extends CreateVPCAssociationAuthorizationRequest {
}
export interface CreateVPCAssociationAuthorizationCommandOutput extends CreateVPCAssociationAuthorizationResponse, __MetadataBearer {
}
/**
 * <p>Authorizes the AWS account that created a specified VPC to submit an <code>AssociateVPCWithHostedZone</code>
 * 			request to associate the VPC with a specified hosted zone that was created by a different account.
 * 			To submit a <code>CreateVPCAssociationAuthorization</code> request, you must use the account that created the
 * 			hosted zone. After you authorize the association, use the account that created the VPC to submit an
 * 			<code>AssociateVPCWithHostedZone</code> request.</p>
 * 		       <note>
 *             <p>If you want to associate multiple VPCs that you created by using one account with a hosted zone
 * 			that you created by using a different account, you must submit one authorization request for each VPC.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateVPCAssociationAuthorizationCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateVPCAssociationAuthorizationCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateVPCAssociationAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVPCAssociationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link CreateVPCAssociationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVPCAssociationAuthorizationCommand extends $Command<CreateVPCAssociationAuthorizationCommandInput, CreateVPCAssociationAuthorizationCommandOutput, Route53ClientResolvedConfig> {
    readonly input: CreateVPCAssociationAuthorizationCommandInput;
    constructor(input: CreateVPCAssociationAuthorizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVPCAssociationAuthorizationCommandInput, CreateVPCAssociationAuthorizationCommandOutput>;
    private serialize;
    private deserialize;
}
