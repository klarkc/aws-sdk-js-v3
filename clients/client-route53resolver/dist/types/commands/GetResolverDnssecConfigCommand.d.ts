import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetResolverDnssecConfigRequest, GetResolverDnssecConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResolverDnssecConfigCommandInput extends GetResolverDnssecConfigRequest {
}
export interface GetResolverDnssecConfigCommandOutput extends GetResolverDnssecConfigResponse, __MetadataBearer {
}
/**
 * <p>Gets DNSSEC validation information for a specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverDnssecConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverDnssecConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetResolverDnssecConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverDnssecConfigCommandInput} for command's `input` shape.
 * @see {@link GetResolverDnssecConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResolverDnssecConfigCommand extends $Command<GetResolverDnssecConfigCommandInput, GetResolverDnssecConfigCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: GetResolverDnssecConfigCommandInput;
    constructor(input: GetResolverDnssecConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResolverDnssecConfigCommandInput, GetResolverDnssecConfigCommandOutput>;
    private serialize;
    private deserialize;
}
