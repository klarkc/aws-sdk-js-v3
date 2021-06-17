import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetResolverRuleRequest, GetResolverRuleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResolverRuleCommandInput extends GetResolverRuleRequest {
}
export interface GetResolverRuleCommandOutput extends GetResolverRuleResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the
 * 			outbound Resolver endpoint that the rule is associated with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetResolverRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverRuleCommandInput} for command's `input` shape.
 * @see {@link GetResolverRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResolverRuleCommand extends $Command<GetResolverRuleCommandInput, GetResolverRuleCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: GetResolverRuleCommandInput;
    constructor(input: GetResolverRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResolverRuleCommandInput, GetResolverRuleCommandOutput>;
    private serialize;
    private deserialize;
}
