import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { ListTagsForDomainRequest, ListTagsForDomainResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTagsForDomainCommandInput extends ListTagsForDomainRequest {
}
export interface ListTagsForDomainCommandOutput extends ListTagsForDomainResponse, __MetadataBearer {
}
/**
 * <p>This operation returns all of the tags that are associated with the specified domain.</p>
 * 		       <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ListTagsForDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ListTagsForDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new ListTagsForDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForDomainCommandInput} for command's `input` shape.
 * @see {@link ListTagsForDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTagsForDomainCommand extends $Command<ListTagsForDomainCommandInput, ListTagsForDomainCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: ListTagsForDomainCommandInput;
    constructor(input: ListTagsForDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForDomainCommandInput, ListTagsForDomainCommandOutput>;
    private serialize;
    private deserialize;
}
