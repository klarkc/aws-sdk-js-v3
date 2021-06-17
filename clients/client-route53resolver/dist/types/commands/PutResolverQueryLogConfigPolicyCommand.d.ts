import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { PutResolverQueryLogConfigPolicyRequest, PutResolverQueryLogConfigPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutResolverQueryLogConfigPolicyCommandInput extends PutResolverQueryLogConfigPolicyRequest {
}
export interface PutResolverQueryLogConfigPolicyCommandOutput extends PutResolverQueryLogConfigPolicyResponse, __MetadataBearer {
}
/**
 * <p>Specifies an AWS account that you want to share a query logging configuration with, the query logging configuration that you want to share,
 * 			and the operations that you want the account to be able to perform on the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, PutResolverQueryLogConfigPolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, PutResolverQueryLogConfigPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new PutResolverQueryLogConfigPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResolverQueryLogConfigPolicyCommandInput} for command's `input` shape.
 * @see {@link PutResolverQueryLogConfigPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutResolverQueryLogConfigPolicyCommand extends $Command<PutResolverQueryLogConfigPolicyCommandInput, PutResolverQueryLogConfigPolicyCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: PutResolverQueryLogConfigPolicyCommandInput;
    constructor(input: PutResolverQueryLogConfigPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutResolverQueryLogConfigPolicyCommandInput, PutResolverQueryLogConfigPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
