import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { UpdateResolverEndpointRequest, UpdateResolverEndpointResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateResolverEndpointCommandInput extends UpdateResolverEndpointRequest {
}
export interface UpdateResolverEndpointCommandOutput extends UpdateResolverEndpointResponse, __MetadataBearer {
}
/**
 * <p>Updates the name of an inbound or an outbound Resolver endpoint.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateResolverEndpointCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateResolverEndpointCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new UpdateResolverEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResolverEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateResolverEndpointCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateResolverEndpointCommand extends $Command<UpdateResolverEndpointCommandInput, UpdateResolverEndpointCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: UpdateResolverEndpointCommandInput;
    constructor(input: UpdateResolverEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResolverEndpointCommandInput, UpdateResolverEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
