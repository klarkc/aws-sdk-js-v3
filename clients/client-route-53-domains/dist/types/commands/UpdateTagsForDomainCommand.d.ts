import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { UpdateTagsForDomainRequest, UpdateTagsForDomainResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTagsForDomainCommandInput extends UpdateTagsForDomainRequest {
}
export interface UpdateTagsForDomainCommandOutput extends UpdateTagsForDomainResponse, __MetadataBearer {
}
/**
 * <p>This operation adds or updates tags for a specified domain.</p>
 * 		       <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, UpdateTagsForDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, UpdateTagsForDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new UpdateTagsForDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTagsForDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateTagsForDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTagsForDomainCommand extends $Command<UpdateTagsForDomainCommandInput, UpdateTagsForDomainCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: UpdateTagsForDomainCommandInput;
    constructor(input: UpdateTagsForDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTagsForDomainCommandInput, UpdateTagsForDomainCommandOutput>;
    private serialize;
    private deserialize;
}
