import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeReservationRequest, DescribeReservationResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReservationCommandInput extends DescribeReservationRequest {
}
export interface DescribeReservationCommandOutput extends DescribeReservationResponse, __MetadataBearer {
}
/**
 * Get details for a reservation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeReservationCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeReservationCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservationCommandInput} for command's `input` shape.
 * @see {@link DescribeReservationCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReservationCommand extends $Command<DescribeReservationCommandInput, DescribeReservationCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: DescribeReservationCommandInput;
    constructor(input: DescribeReservationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservationCommandInput, DescribeReservationCommandOutput>;
    private serialize;
    private deserialize;
}
