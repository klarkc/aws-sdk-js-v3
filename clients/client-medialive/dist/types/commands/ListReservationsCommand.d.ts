import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListReservationsRequest, ListReservationsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListReservationsCommandInput extends ListReservationsRequest {
}
export interface ListReservationsCommandOutput extends ListReservationsResponse, __MetadataBearer {
}
/**
 * List purchased reservations.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListReservationsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListReservationsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListReservationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReservationsCommandInput} for command's `input` shape.
 * @see {@link ListReservationsCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListReservationsCommand extends $Command<ListReservationsCommandInput, ListReservationsCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: ListReservationsCommandInput;
    constructor(input: ListReservationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReservationsCommandInput, ListReservationsCommandOutput>;
    private serialize;
    private deserialize;
}
