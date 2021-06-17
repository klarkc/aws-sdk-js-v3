import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { PutResolverRulePolicyRequest, PutResolverRulePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutResolverRulePolicyCommandInput extends PutResolverRulePolicyRequest {
}
export interface PutResolverRulePolicyCommandOutput extends PutResolverRulePolicyResponse, __MetadataBearer {
}
/**
 * <p>Specifies an AWS rule that you want to share with another account, the account that you want to share the rule with,
 * 			and the operations that you want the account to be able to perform on the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, PutResolverRulePolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, PutResolverRulePolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new PutResolverRulePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResolverRulePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResolverRulePolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutResolverRulePolicyCommand extends $Command<PutResolverRulePolicyCommandInput, PutResolverRulePolicyCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: PutResolverRulePolicyCommandInput;
    constructor(input: PutResolverRulePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutResolverRulePolicyCommandInput, PutResolverRulePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
