import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetResolverQueryLogConfigPolicyRequest, GetResolverQueryLogConfigPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResolverQueryLogConfigPolicyCommandInput extends GetResolverQueryLogConfigPolicyRequest {
}
export interface GetResolverQueryLogConfigPolicyCommandOutput extends GetResolverQueryLogConfigPolicyResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a query logging policy. A query logging policy specifies the Resolver query logging
 * 			operations and resources that you want to allow another AWS account to be able to use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverQueryLogConfigPolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverQueryLogConfigPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetResolverQueryLogConfigPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverQueryLogConfigPolicyCommandInput} for command's `input` shape.
 * @see {@link GetResolverQueryLogConfigPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResolverQueryLogConfigPolicyCommand extends $Command<GetResolverQueryLogConfigPolicyCommandInput, GetResolverQueryLogConfigPolicyCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: GetResolverQueryLogConfigPolicyCommandInput;
    constructor(input: GetResolverQueryLogConfigPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResolverQueryLogConfigPolicyCommandInput, GetResolverQueryLogConfigPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
