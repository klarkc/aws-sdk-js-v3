import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { ListSourceLocationsRequest, ListSourceLocationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSourceLocationsCommandInput extends ListSourceLocationsRequest {
}
export interface ListSourceLocationsCommandOutput extends ListSourceLocationsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a list of source locations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListSourceLocationsCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListSourceLocationsCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new ListSourceLocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSourceLocationsCommandInput} for command's `input` shape.
 * @see {@link ListSourceLocationsCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSourceLocationsCommand extends $Command<ListSourceLocationsCommandInput, ListSourceLocationsCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: ListSourceLocationsCommandInput;
    constructor(input: ListSourceLocationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSourceLocationsCommandInput, ListSourceLocationsCommandOutput>;
    private serialize;
    private deserialize;
}
