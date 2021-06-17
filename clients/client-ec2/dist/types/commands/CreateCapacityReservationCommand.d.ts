import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateCapacityReservationRequest, CreateCapacityReservationResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCapacityReservationCommandInput extends CreateCapacityReservationRequest {
}
export interface CreateCapacityReservationCommandOutput extends CreateCapacityReservationResult, __MetadataBearer {
}
/**
 * <p>Creates a new Capacity Reservation with the specified attributes.</p>
 * 		       <p>Capacity Reservations enable you to reserve capacity for your Amazon EC2 instances in a specific Availability Zone for any duration. This
 * 			gives you the flexibility to selectively add capacity reservations and still get the Regional RI discounts for that usage.
 * 			By creating Capacity Reservations, you ensure that you always have access to Amazon EC2 capacity when you need it, for as long as you need it.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">Capacity Reservations</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *
 * 		       <p>Your request to create a Capacity Reservation could fail if Amazon EC2 does not have sufficient capacity to
 * 			fulfill the request. If your request fails due to Amazon EC2 capacity constraints, either try
 * 			again at a later time, try in a different Availability Zone, or request a smaller
 * 			capacity reservation. If your application is flexible across instance types and sizes,
 * 			try to create a Capacity Reservation with different instance attributes.</p>
 *
 * 		       <p>Your request could also fail if the requested quantity exceeds your On-Demand Instance
 * 			limit for the selected instance type. If your request fails due to limit constraints,
 * 			increase your On-Demand Instance limit for the required instance type and try again. For
 * 			more information about increasing your instance limits, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 Service
 * 				Quotas</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateCapacityReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateCapacityReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateCapacityReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link CreateCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCapacityReservationCommand extends $Command<CreateCapacityReservationCommandInput, CreateCapacityReservationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateCapacityReservationCommandInput;
    constructor(input: CreateCapacityReservationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCapacityReservationCommandInput, CreateCapacityReservationCommandOutput>;
    private serialize;
    private deserialize;
}
