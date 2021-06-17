import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetResolverEndpointRequest, GetResolverEndpointResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResolverEndpointCommandInput extends GetResolverEndpointRequest {
}
export interface GetResolverEndpointCommandOutput extends GetResolverEndpointResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the
 * 			current status of the endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverEndpointCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverEndpointCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetResolverEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverEndpointCommandInput} for command's `input` shape.
 * @see {@link GetResolverEndpointCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResolverEndpointCommand extends $Command<GetResolverEndpointCommandInput, GetResolverEndpointCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: GetResolverEndpointCommandInput;
    constructor(input: GetResolverEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResolverEndpointCommandInput, GetResolverEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
