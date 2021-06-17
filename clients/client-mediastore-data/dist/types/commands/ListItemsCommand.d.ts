import { MediaStoreDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreDataClient";
import { ListItemsRequest, ListItemsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListItemsCommandInput extends ListItemsRequest {
}
export interface ListItemsCommandOutput extends ListItemsResponse, __MetadataBearer {
}
/**
 * <p>Provides a list of metadata entries about folders and objects in the specified
 *          folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, ListItemsCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, ListItemsCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * const client = new MediaStoreDataClient(config);
 * const command = new ListItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListItemsCommandInput} for command's `input` shape.
 * @see {@link ListItemsCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListItemsCommand extends $Command<ListItemsCommandInput, ListItemsCommandOutput, MediaStoreDataClientResolvedConfig> {
    readonly input: ListItemsCommandInput;
    constructor(input: ListItemsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListItemsCommandInput, ListItemsCommandOutput>;
    private serialize;
    private deserialize;
}
