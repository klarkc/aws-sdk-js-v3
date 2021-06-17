import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetGroupsForCapacityReservationRequest, GetGroupsForCapacityReservationResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetGroupsForCapacityReservationCommandInput extends GetGroupsForCapacityReservationRequest {
}
export interface GetGroupsForCapacityReservationCommandOutput extends GetGroupsForCapacityReservationResult, __MetadataBearer {
}
/**
 * <p>Lists the resource groups to which a Capacity Reservation has been added.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetGroupsForCapacityReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetGroupsForCapacityReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetGroupsForCapacityReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupsForCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link GetGroupsForCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetGroupsForCapacityReservationCommand extends $Command<GetGroupsForCapacityReservationCommandInput, GetGroupsForCapacityReservationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetGroupsForCapacityReservationCommandInput;
    constructor(input: GetGroupsForCapacityReservationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGroupsForCapacityReservationCommandInput, GetGroupsForCapacityReservationCommandOutput>;
    private serialize;
    private deserialize;
}
