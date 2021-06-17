import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DeleteResolverQueryLogConfigRequest, DeleteResolverQueryLogConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteResolverQueryLogConfigCommandInput extends DeleteResolverQueryLogConfigRequest {
}
export interface DeleteResolverQueryLogConfigCommandOutput extends DeleteResolverQueryLogConfigResponse, __MetadataBearer {
}
/**
 * <p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are
 * 			associated with the configuration. This also applies if the query logging configuration is shared with other AWS accounts, and
 * 			the other accounts have associated VPCs with the shared configuration.</p>
 *
 * 		       <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p>
 *
 * 		       <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing
 * 			the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs
 * 			that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically
 * 			disassociated from the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DeleteResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteResolverQueryLogConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteResolverQueryLogConfigCommand extends $Command<DeleteResolverQueryLogConfigCommandInput, DeleteResolverQueryLogConfigCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: DeleteResolverQueryLogConfigCommandInput;
    constructor(input: DeleteResolverQueryLogConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResolverQueryLogConfigCommandInput, DeleteResolverQueryLogConfigCommandOutput>;
    private serialize;
    private deserialize;
}
