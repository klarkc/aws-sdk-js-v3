import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetCapacityReservationUsageRequest, GetCapacityReservationUsageResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCapacityReservationUsageCommandInput extends GetCapacityReservationUsageRequest {
}
export interface GetCapacityReservationUsageCommandOutput extends GetCapacityReservationUsageResult, __MetadataBearer {
}
/**
 * <p>Gets usage information about a Capacity Reservation. If the Capacity Reservation is shared, it shows usage information for the Capacity Reservation owner
 * 			and each AWS account that is currently using the shared capacity. If the Capacity Reservation is not shared, it shows only
 * 			the Capacity Reservation owner's usage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetCapacityReservationUsageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetCapacityReservationUsageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetCapacityReservationUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCapacityReservationUsageCommandInput} for command's `input` shape.
 * @see {@link GetCapacityReservationUsageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCapacityReservationUsageCommand extends $Command<GetCapacityReservationUsageCommandInput, GetCapacityReservationUsageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetCapacityReservationUsageCommandInput;
    constructor(input: GetCapacityReservationUsageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCapacityReservationUsageCommandInput, GetCapacityReservationUsageCommandOutput>;
    private serialize;
    private deserialize;
}
