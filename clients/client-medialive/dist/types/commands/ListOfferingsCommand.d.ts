import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListOfferingsRequest, ListOfferingsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListOfferingsCommandInput extends ListOfferingsRequest {
}
export interface ListOfferingsCommandOutput extends ListOfferingsResponse, __MetadataBearer {
}
/**
 * List offerings available for purchase.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListOfferingsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListOfferingsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOfferingsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingsCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOfferingsCommand extends $Command<ListOfferingsCommandInput, ListOfferingsCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: ListOfferingsCommandInput;
    constructor(input: ListOfferingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOfferingsCommandInput, ListOfferingsCommandOutput>;
    private serialize;
    private deserialize;
}
