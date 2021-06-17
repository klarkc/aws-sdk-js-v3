import { ServiceCatalogAppRegistryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogAppRegistryClient";
import { ListAttributeGroupsRequest, ListAttributeGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAttributeGroupsCommandInput extends ListAttributeGroupsRequest {
}
export interface ListAttributeGroupsCommandOutput extends ListAttributeGroupsResponse, __MetadataBearer {
}
/**
 * <p>Lists all attribute groups which you have access to. Results are paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, ListAttributeGroupsCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, ListAttributeGroupsCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new ListAttributeGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttributeGroupsCommandInput} for command's `input` shape.
 * @see {@link ListAttributeGroupsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAttributeGroupsCommand extends $Command<ListAttributeGroupsCommandInput, ListAttributeGroupsCommandOutput, ServiceCatalogAppRegistryClientResolvedConfig> {
    readonly input: ListAttributeGroupsCommandInput;
    constructor(input: ListAttributeGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogAppRegistryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAttributeGroupsCommandInput, ListAttributeGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
