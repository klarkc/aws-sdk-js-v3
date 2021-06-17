import { MarketplaceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceCatalogClient";
import { ListEntitiesRequest, ListEntitiesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEntitiesCommandInput extends ListEntitiesRequest {
}
export interface ListEntitiesCommandOutput extends ListEntitiesResponse, __MetadataBearer {
}
/**
 * <p>Provides the list of entities of a given type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, ListEntitiesCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, ListEntitiesCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const command = new ListEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEntitiesCommandInput} for command's `input` shape.
 * @see {@link ListEntitiesCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEntitiesCommand extends $Command<ListEntitiesCommandInput, ListEntitiesCommandOutput, MarketplaceCatalogClientResolvedConfig> {
    readonly input: ListEntitiesCommandInput;
    constructor(input: ListEntitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEntitiesCommandInput, ListEntitiesCommandOutput>;
    private serialize;
    private deserialize;
}
