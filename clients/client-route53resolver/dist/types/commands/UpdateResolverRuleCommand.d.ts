import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { UpdateResolverRuleRequest, UpdateResolverRuleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateResolverRuleCommandInput extends UpdateResolverRuleRequest {
}
export interface UpdateResolverRuleCommandOutput extends UpdateResolverRuleResponse, __MetadataBearer {
}
/**
 * <p>Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional.
 * 			If you don't specify a parameter, it retains its current value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new UpdateResolverRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResolverRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateResolverRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateResolverRuleCommand extends $Command<UpdateResolverRuleCommandInput, UpdateResolverRuleCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: UpdateResolverRuleCommandInput;
    constructor(input: UpdateResolverRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResolverRuleCommandInput, UpdateResolverRuleCommandOutput>;
    private serialize;
    private deserialize;
}
