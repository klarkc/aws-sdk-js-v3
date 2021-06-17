import { ServiceCatalogAppRegistryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogAppRegistryClient";
import { ListAssociatedResourcesRequest, ListAssociatedResourcesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAssociatedResourcesCommandInput extends ListAssociatedResourcesRequest {
}
export interface ListAssociatedResourcesCommandOutput extends ListAssociatedResourcesResponse, __MetadataBearer {
}
/**
 * <p>Lists all resources that are associated with specified application. Results are paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, ListAssociatedResourcesCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, ListAssociatedResourcesCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new ListAssociatedResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedResourcesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssociatedResourcesCommand extends $Command<ListAssociatedResourcesCommandInput, ListAssociatedResourcesCommandOutput, ServiceCatalogAppRegistryClientResolvedConfig> {
    readonly input: ListAssociatedResourcesCommandInput;
    constructor(input: ListAssociatedResourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogAppRegistryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssociatedResourcesCommandInput, ListAssociatedResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
