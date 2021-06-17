import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetResolverQueryLogConfigRequest, GetResolverQueryLogConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResolverQueryLogConfigCommandInput extends GetResolverQueryLogConfigRequest {
}
export interface GetResolverQueryLogConfigCommandOutput extends GetResolverQueryLogConfigResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration
 * 			is logging queries for and the location that logs are sent to. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link GetResolverQueryLogConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResolverQueryLogConfigCommand extends $Command<GetResolverQueryLogConfigCommandInput, GetResolverQueryLogConfigCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: GetResolverQueryLogConfigCommandInput;
    constructor(input: GetResolverQueryLogConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResolverQueryLogConfigCommandInput, GetResolverQueryLogConfigCommandOutput>;
    private serialize;
    private deserialize;
}
