import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListResolverQueryLogConfigsRequest, ListResolverQueryLogConfigsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResolverQueryLogConfigsCommandInput extends ListResolverQueryLogConfigsRequest {
}
export interface ListResolverQueryLogConfigsCommandOutput extends ListResolverQueryLogConfigsResponse, __MetadataBearer {
}
/**
 * <p>Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save
 * 			DNS query logs and specifies the VPCs that you want to log queries for.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverQueryLogConfigsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverQueryLogConfigsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverQueryLogConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverQueryLogConfigsCommandInput} for command's `input` shape.
 * @see {@link ListResolverQueryLogConfigsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResolverQueryLogConfigsCommand extends $Command<ListResolverQueryLogConfigsCommandInput, ListResolverQueryLogConfigsCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: ListResolverQueryLogConfigsCommandInput;
    constructor(input: ListResolverQueryLogConfigsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResolverQueryLogConfigsCommandInput, ListResolverQueryLogConfigsCommandOutput>;
    private serialize;
    private deserialize;
}
