import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DeleteResolverRuleRequest, DeleteResolverRuleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteResolverRuleCommandInput extends DeleteResolverRuleRequest {
}
export interface DeleteResolverRuleCommandOutput extends DeleteResolverRuleResponse, __MetadataBearer {
}
/**
 * <p>Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you
 * 			associated the Resolver rule with. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DeleteResolverRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResolverRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteResolverRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteResolverRuleCommand extends $Command<DeleteResolverRuleCommandInput, DeleteResolverRuleCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: DeleteResolverRuleCommandInput;
    constructor(input: DeleteResolverRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResolverRuleCommandInput, DeleteResolverRuleCommandOutput>;
    private serialize;
    private deserialize;
}
