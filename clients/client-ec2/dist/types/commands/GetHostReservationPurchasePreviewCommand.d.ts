import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetHostReservationPurchasePreviewRequest, GetHostReservationPurchasePreviewResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetHostReservationPurchasePreviewCommandInput extends GetHostReservationPurchasePreviewRequest {
}
export interface GetHostReservationPurchasePreviewCommandOutput extends GetHostReservationPurchasePreviewResult, __MetadataBearer {
}
/**
 * <p>Preview a reservation purchase with configurations that match those of your
 *             Dedicated Host. You must have active Dedicated Hosts in your account before you purchase
 *             a reservation.</p>
 *         <p>This is a preview of the <a>PurchaseHostReservation</a> action and does
 *             not result in the offering being purchased.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetHostReservationPurchasePreviewCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetHostReservationPurchasePreviewCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetHostReservationPurchasePreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostReservationPurchasePreviewCommandInput} for command's `input` shape.
 * @see {@link GetHostReservationPurchasePreviewCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetHostReservationPurchasePreviewCommand extends $Command<GetHostReservationPurchasePreviewCommandInput, GetHostReservationPurchasePreviewCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetHostReservationPurchasePreviewCommandInput;
    constructor(input: GetHostReservationPurchasePreviewCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHostReservationPurchasePreviewCommandInput, GetHostReservationPurchasePreviewCommandOutput>;
    private serialize;
    private deserialize;
}
