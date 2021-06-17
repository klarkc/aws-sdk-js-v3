import { MarketplaceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceCatalogClient";
import { ListChangeSetsRequest, ListChangeSetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListChangeSetsCommandInput extends ListChangeSetsRequest {
}
export interface ListChangeSetsCommandOutput extends ListChangeSetsResponse, __MetadataBearer {
}
/**
 * <p>Returns the list of change sets owned by the account being used to make the call. You
 *             can filter this list by providing any combination of <code>entityId</code>,
 *                 <code>ChangeSetName</code>, and status. If you provide more than one filter, the API
 *             operation applies a logical AND between the filters.</p>
 *
 *         <p>You can describe a change during the 60-day request history retention period for API
 *             calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, ListChangeSetsCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, ListChangeSetsCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const command = new ListChangeSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChangeSetsCommandInput} for command's `input` shape.
 * @see {@link ListChangeSetsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListChangeSetsCommand extends $Command<ListChangeSetsCommandInput, ListChangeSetsCommandOutput, MarketplaceCatalogClientResolvedConfig> {
    readonly input: ListChangeSetsCommandInput;
    constructor(input: ListChangeSetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListChangeSetsCommandInput, ListChangeSetsCommandOutput>;
    private serialize;
    private deserialize;
}
