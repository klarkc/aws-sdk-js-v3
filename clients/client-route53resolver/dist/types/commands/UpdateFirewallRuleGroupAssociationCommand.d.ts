import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { UpdateFirewallRuleGroupAssociationRequest, UpdateFirewallRuleGroupAssociationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFirewallRuleGroupAssociationCommandInput extends UpdateFirewallRuleGroupAssociationRequest {
}
export interface UpdateFirewallRuleGroupAssociationCommandOutput extends UpdateFirewallRuleGroupAssociationResponse, __MetadataBearer {
}
/**
 * <p>Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateFirewallRuleGroupAssociationCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateFirewallRuleGroupAssociationCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new UpdateFirewallRuleGroupAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallRuleGroupAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallRuleGroupAssociationCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFirewallRuleGroupAssociationCommand extends $Command<UpdateFirewallRuleGroupAssociationCommandInput, UpdateFirewallRuleGroupAssociationCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: UpdateFirewallRuleGroupAssociationCommandInput;
    constructor(input: UpdateFirewallRuleGroupAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFirewallRuleGroupAssociationCommandInput, UpdateFirewallRuleGroupAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
