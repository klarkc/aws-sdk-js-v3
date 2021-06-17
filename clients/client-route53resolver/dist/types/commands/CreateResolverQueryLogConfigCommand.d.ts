import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { CreateResolverQueryLogConfigRequest, CreateResolverQueryLogConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateResolverQueryLogConfigCommandInput extends CreateResolverQueryLogConfigRequest {
}
export interface CreateResolverQueryLogConfigCommandOutput extends CreateResolverQueryLogConfigResponse, __MetadataBearer {
}
/**
 * <p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs.
 * 			Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p>
 *
 * 		       <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p>
 *
 * 		       <p>You can optionally use AWS Resource Access Manager (AWS RAM) to share a query logging configuration with other AWS accounts. The other accounts
 * 			can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all
 * 			VPCs that are associated with the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new CreateResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link CreateResolverQueryLogConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateResolverQueryLogConfigCommand extends $Command<CreateResolverQueryLogConfigCommandInput, CreateResolverQueryLogConfigCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: CreateResolverQueryLogConfigCommandInput;
    constructor(input: CreateResolverQueryLogConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResolverQueryLogConfigCommandInput, CreateResolverQueryLogConfigCommandOutput>;
    private serialize;
    private deserialize;
}
