import { ServiceCatalogAppRegistryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogAppRegistryClient";
import { ListAssociatedAttributeGroupsRequest, ListAssociatedAttributeGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAssociatedAttributeGroupsCommandInput extends ListAssociatedAttributeGroupsRequest {
}
export interface ListAssociatedAttributeGroupsCommandOutput extends ListAssociatedAttributeGroupsResponse, __MetadataBearer {
}
/**
 * <p>Lists all attribute groups that are associated with specified application.  Results are paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, ListAssociatedAttributeGroupsCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, ListAssociatedAttributeGroupsCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new ListAssociatedAttributeGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedAttributeGroupsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedAttributeGroupsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssociatedAttributeGroupsCommand extends $Command<ListAssociatedAttributeGroupsCommandInput, ListAssociatedAttributeGroupsCommandOutput, ServiceCatalogAppRegistryClientResolvedConfig> {
    readonly input: ListAssociatedAttributeGroupsCommandInput;
    constructor(input: ListAssociatedAttributeGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogAppRegistryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssociatedAttributeGroupsCommandInput, ListAssociatedAttributeGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
