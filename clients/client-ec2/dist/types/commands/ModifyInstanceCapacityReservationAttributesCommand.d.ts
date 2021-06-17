import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstanceCapacityReservationAttributesRequest, ModifyInstanceCapacityReservationAttributesResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyInstanceCapacityReservationAttributesCommandInput extends ModifyInstanceCapacityReservationAttributesRequest {
}
export interface ModifyInstanceCapacityReservationAttributesCommandOutput extends ModifyInstanceCapacityReservationAttributesResult, __MetadataBearer {
}
/**
 * <p>Modifies the Capacity Reservation settings for a stopped instance. Use this action to configure an
 * 			instance to target a specific Capacity Reservation, run in any <code>open</code> Capacity Reservation with matching
 * 			attributes, or run On-Demand Instance capacity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceCapacityReservationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceCapacityReservationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstanceCapacityReservationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceCapacityReservationAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceCapacityReservationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyInstanceCapacityReservationAttributesCommand extends $Command<ModifyInstanceCapacityReservationAttributesCommandInput, ModifyInstanceCapacityReservationAttributesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyInstanceCapacityReservationAttributesCommandInput;
    constructor(input: ModifyInstanceCapacityReservationAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyInstanceCapacityReservationAttributesCommandInput, ModifyInstanceCapacityReservationAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
