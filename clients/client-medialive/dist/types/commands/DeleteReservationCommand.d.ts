import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteReservationRequest, DeleteReservationResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteReservationCommandInput extends DeleteReservationRequest {
}
export interface DeleteReservationCommandOutput extends DeleteReservationResponse, __MetadataBearer {
}
/**
 * Delete an expired reservation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteReservationCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteReservationCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DeleteReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReservationCommandInput} for command's `input` shape.
 * @see {@link DeleteReservationCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteReservationCommand extends $Command<DeleteReservationCommandInput, DeleteReservationCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: DeleteReservationCommandInput;
    constructor(input: DeleteReservationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReservationCommandInput, DeleteReservationCommandOutput>;
    private serialize;
    private deserialize;
}
