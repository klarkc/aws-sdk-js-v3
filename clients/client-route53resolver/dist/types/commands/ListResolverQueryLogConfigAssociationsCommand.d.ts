import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListResolverQueryLogConfigAssociationsRequest, ListResolverQueryLogConfigAssociationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResolverQueryLogConfigAssociationsCommandInput extends ListResolverQueryLogConfigAssociationsRequest {
}
export interface ListResolverQueryLogConfigAssociationsCommandOutput extends ListResolverQueryLogConfigAssociationsResponse, __MetadataBearer {
}
/**
 * <p>Lists information about associations between Amazon VPCs and query logging configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverQueryLogConfigAssociationsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverQueryLogConfigAssociationsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverQueryLogConfigAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverQueryLogConfigAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListResolverQueryLogConfigAssociationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResolverQueryLogConfigAssociationsCommand extends $Command<ListResolverQueryLogConfigAssociationsCommandInput, ListResolverQueryLogConfigAssociationsCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: ListResolverQueryLogConfigAssociationsCommandInput;
    constructor(input: ListResolverQueryLogConfigAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResolverQueryLogConfigAssociationsCommandInput, ListResolverQueryLogConfigAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
