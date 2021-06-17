import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeCapacityReservationsRequest, DescribeCapacityReservationsResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCapacityReservationsCommandInput extends DescribeCapacityReservationsRequest {
}
export interface DescribeCapacityReservationsCommandOutput extends DescribeCapacityReservationsResult, __MetadataBearer {
}
/**
 * <p>Describes one or more of your Capacity Reservations. The results describe only the Capacity Reservations in the AWS
 * 			Region that you're currently using.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCapacityReservationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCapacityReservationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeCapacityReservationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCapacityReservationsCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityReservationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCapacityReservationsCommand extends $Command<DescribeCapacityReservationsCommandInput, DescribeCapacityReservationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeCapacityReservationsCommandInput;
    constructor(input: DescribeCapacityReservationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCapacityReservationsCommandInput, DescribeCapacityReservationsCommandOutput>;
    private serialize;
    private deserialize;
}
