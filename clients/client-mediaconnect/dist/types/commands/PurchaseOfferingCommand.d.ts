import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { PurchaseOfferingRequest, PurchaseOfferingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PurchaseOfferingCommandInput extends PurchaseOfferingRequest {
}
export interface PurchaseOfferingCommandOutput extends PurchaseOfferingResponse, __MetadataBearer {
}
/**
 * Submits a request to purchase an offering. If you already have an active reservation, you can't purchase another offering.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, PurchaseOfferingCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, PurchaseOfferingCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new PurchaseOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseOfferingCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PurchaseOfferingCommand extends $Command<PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: PurchaseOfferingCommandInput;
    constructor(input: PurchaseOfferingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput>;
    private serialize;
    private deserialize;
}
