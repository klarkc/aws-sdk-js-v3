import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { ListWebsiteAuthorizationProvidersRequest, ListWebsiteAuthorizationProvidersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListWebsiteAuthorizationProvidersCommandInput extends ListWebsiteAuthorizationProvidersRequest {
}
export interface ListWebsiteAuthorizationProvidersCommandOutput extends ListWebsiteAuthorizationProvidersResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a list of website authorization providers associated with a specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, ListWebsiteAuthorizationProvidersCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, ListWebsiteAuthorizationProvidersCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new ListWebsiteAuthorizationProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWebsiteAuthorizationProvidersCommandInput} for command's `input` shape.
 * @see {@link ListWebsiteAuthorizationProvidersCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWebsiteAuthorizationProvidersCommand extends $Command<ListWebsiteAuthorizationProvidersCommandInput, ListWebsiteAuthorizationProvidersCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: ListWebsiteAuthorizationProvidersCommandInput;
    constructor(input: ListWebsiteAuthorizationProvidersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWebsiteAuthorizationProvidersCommandInput, ListWebsiteAuthorizationProvidersCommandOutput>;
    private serialize;
    private deserialize;
}
