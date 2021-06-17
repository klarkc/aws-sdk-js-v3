import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { PurchaseHostReservationRequest, PurchaseHostReservationResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PurchaseHostReservationCommandInput extends PurchaseHostReservationRequest {
}
export interface PurchaseHostReservationCommandOutput extends PurchaseHostReservationResult, __MetadataBearer {
}
/**
 * <p>Purchase a reservation with configurations that match those of your Dedicated Host.
 *             You must have active Dedicated Hosts in your account before you purchase a reservation.
 *             This action results in the specified reservation being purchased and charged to your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, PurchaseHostReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, PurchaseHostReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new PurchaseHostReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseHostReservationCommandInput} for command's `input` shape.
 * @see {@link PurchaseHostReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PurchaseHostReservationCommand extends $Command<PurchaseHostReservationCommandInput, PurchaseHostReservationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: PurchaseHostReservationCommandInput;
    constructor(input: PurchaseHostReservationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseHostReservationCommandInput, PurchaseHostReservationCommandOutput>;
    private serialize;
    private deserialize;
}
