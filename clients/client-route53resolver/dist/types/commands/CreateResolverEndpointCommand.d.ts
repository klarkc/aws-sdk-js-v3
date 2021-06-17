import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { CreateResolverEndpointRequest, CreateResolverEndpointResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateResolverEndpointCommandInput extends CreateResolverEndpointRequest {
}
export interface CreateResolverEndpointCommandOutput extends CreateResolverEndpointResponse, __MetadataBearer {
}
/**
 * <p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p>
 * 		       <ul>
 *             <li>
 *                <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC
 * 				from your network.</p>
 *             </li>
 *             <li>
 *                <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC
 * 				to your network.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateResolverEndpointCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateResolverEndpointCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new CreateResolverEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResolverEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateResolverEndpointCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateResolverEndpointCommand extends $Command<CreateResolverEndpointCommandInput, CreateResolverEndpointCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: CreateResolverEndpointCommandInput;
    constructor(input: CreateResolverEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResolverEndpointCommandInput, CreateResolverEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
