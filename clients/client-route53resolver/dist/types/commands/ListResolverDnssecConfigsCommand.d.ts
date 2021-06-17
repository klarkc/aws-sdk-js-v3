import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListResolverDnssecConfigsRequest, ListResolverDnssecConfigsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResolverDnssecConfigsCommandInput extends ListResolverDnssecConfigsRequest {
}
export interface ListResolverDnssecConfigsCommandOutput extends ListResolverDnssecConfigsResponse, __MetadataBearer {
}
/**
 * <p>Lists the configurations for DNSSEC validation that are associated with the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverDnssecConfigsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverDnssecConfigsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverDnssecConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverDnssecConfigsCommandInput} for command's `input` shape.
 * @see {@link ListResolverDnssecConfigsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResolverDnssecConfigsCommand extends $Command<ListResolverDnssecConfigsCommandInput, ListResolverDnssecConfigsCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: ListResolverDnssecConfigsCommandInput;
    constructor(input: ListResolverDnssecConfigsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResolverDnssecConfigsCommandInput, ListResolverDnssecConfigsCommandOutput>;
    private serialize;
    private deserialize;
}
