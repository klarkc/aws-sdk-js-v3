import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListResolverEndpointIpAddressesRequest, ListResolverEndpointIpAddressesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResolverEndpointIpAddressesCommandInput extends ListResolverEndpointIpAddressesRequest {
}
export interface ListResolverEndpointIpAddressesCommandOutput extends ListResolverEndpointIpAddressesResponse, __MetadataBearer {
}
/**
 * <p>Gets the IP addresses for a specified Resolver endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverEndpointIpAddressesCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverEndpointIpAddressesCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverEndpointIpAddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverEndpointIpAddressesCommandInput} for command's `input` shape.
 * @see {@link ListResolverEndpointIpAddressesCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResolverEndpointIpAddressesCommand extends $Command<ListResolverEndpointIpAddressesCommandInput, ListResolverEndpointIpAddressesCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: ListResolverEndpointIpAddressesCommandInput;
    constructor(input: ListResolverEndpointIpAddressesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResolverEndpointIpAddressesCommandInput, ListResolverEndpointIpAddressesCommandOutput>;
    private serialize;
    private deserialize;
}
