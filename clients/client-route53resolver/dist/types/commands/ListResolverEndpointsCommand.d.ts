import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListResolverEndpointsRequest, ListResolverEndpointsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResolverEndpointsCommandInput extends ListResolverEndpointsRequest {
}
export interface ListResolverEndpointsCommandOutput extends ListResolverEndpointsResponse, __MetadataBearer {
}
/**
 * <p>Lists all the Resolver endpoints that were created using the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverEndpointsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverEndpointsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListResolverEndpointsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResolverEndpointsCommand extends $Command<ListResolverEndpointsCommandInput, ListResolverEndpointsCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: ListResolverEndpointsCommandInput;
    constructor(input: ListResolverEndpointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResolverEndpointsCommandInput, ListResolverEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
