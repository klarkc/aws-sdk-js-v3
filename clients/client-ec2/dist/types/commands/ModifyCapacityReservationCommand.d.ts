import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyCapacityReservationRequest, ModifyCapacityReservationResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyCapacityReservationCommandInput extends ModifyCapacityReservationRequest {
}
export interface ModifyCapacityReservationCommandOutput extends ModifyCapacityReservationResult, __MetadataBearer {
}
/**
 * <p>Modifies a Capacity Reservation's capacity and the conditions under which it is to be released. You
 * 			cannot change a Capacity Reservation's instance type, EBS optimization, instance store settings,
 * 			platform, Availability Zone, or instance eligibility. If you need to modify any of these
 * 			attributes, we recommend that you cancel the Capacity Reservation, and then create a new one with
 * 			the required attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyCapacityReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyCapacityReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyCapacityReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link ModifyCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyCapacityReservationCommand extends $Command<ModifyCapacityReservationCommandInput, ModifyCapacityReservationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyCapacityReservationCommandInput;
    constructor(input: ModifyCapacityReservationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyCapacityReservationCommandInput, ModifyCapacityReservationCommandOutput>;
    private serialize;
    private deserialize;
}
