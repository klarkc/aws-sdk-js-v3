import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { DeleteTagsForDomainRequest, DeleteTagsForDomainResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTagsForDomainCommandInput extends DeleteTagsForDomainRequest {
}
export interface DeleteTagsForDomainCommandOutput extends DeleteTagsForDomainResponse, __MetadataBearer {
}
/**
 * <p>This operation deletes the specified tags for a domain.</p>
 * 		       <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, DeleteTagsForDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, DeleteTagsForDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new DeleteTagsForDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTagsForDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteTagsForDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTagsForDomainCommand extends $Command<DeleteTagsForDomainCommandInput, DeleteTagsForDomainCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: DeleteTagsForDomainCommandInput;
    constructor(input: DeleteTagsForDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTagsForDomainCommandInput, DeleteTagsForDomainCommandOutput>;
    private serialize;
    private deserialize;
}
