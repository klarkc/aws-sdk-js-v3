import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListResolverRuleAssociationsRequest, ListResolverRuleAssociationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResolverRuleAssociationsCommandInput extends ListResolverRuleAssociationsRequest {
}
export interface ListResolverRuleAssociationsCommandOutput extends ListResolverRuleAssociationsResponse, __MetadataBearer {
}
/**
 * <p>Lists the associations that were created between Resolver rules and VPCs using the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverRuleAssociationsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverRuleAssociationsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverRuleAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverRuleAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListResolverRuleAssociationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResolverRuleAssociationsCommand extends $Command<ListResolverRuleAssociationsCommandInput, ListResolverRuleAssociationsCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: ListResolverRuleAssociationsCommandInput;
    constructor(input: ListResolverRuleAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResolverRuleAssociationsCommandInput, ListResolverRuleAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
