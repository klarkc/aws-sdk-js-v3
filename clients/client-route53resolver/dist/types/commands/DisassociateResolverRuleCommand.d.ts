import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DisassociateResolverRuleRequest, DisassociateResolverRuleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateResolverRuleCommandInput extends DisassociateResolverRuleRequest {
}
export interface DisassociateResolverRuleCommandOutput extends DisassociateResolverRuleResponse, __MetadataBearer {
}
/**
 * <p>Removes the association between a specified Resolver rule and a specified VPC.</p>
 * 		       <important>
 * 			         <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the
 * 				domain name that you specified in the Resolver rule. </p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DisassociateResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DisassociateResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DisassociateResolverRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateResolverRuleCommandInput} for command's `input` shape.
 * @see {@link DisassociateResolverRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateResolverRuleCommand extends $Command<DisassociateResolverRuleCommandInput, DisassociateResolverRuleCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: DisassociateResolverRuleCommandInput;
    constructor(input: DisassociateResolverRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateResolverRuleCommandInput, DisassociateResolverRuleCommandOutput>;
    private serialize;
    private deserialize;
}
