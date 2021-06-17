import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { PurchaseOfferingRequest, PurchaseOfferingResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PurchaseOfferingCommandInput extends PurchaseOfferingRequest {
}
export interface PurchaseOfferingCommandOutput extends PurchaseOfferingResponse, __MetadataBearer {
}
/**
 * Purchase an offering and create a reservation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, PurchaseOfferingCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, PurchaseOfferingCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new PurchaseOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseOfferingCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PurchaseOfferingCommand extends $Command<PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: PurchaseOfferingCommandInput;
    constructor(input: PurchaseOfferingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput>;
    private serialize;
    private deserialize;
}
