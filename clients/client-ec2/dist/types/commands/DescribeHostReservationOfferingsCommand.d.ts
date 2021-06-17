import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeHostReservationOfferingsRequest, DescribeHostReservationOfferingsResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeHostReservationOfferingsCommandInput extends DescribeHostReservationOfferingsRequest {
}
export interface DescribeHostReservationOfferingsCommandOutput extends DescribeHostReservationOfferingsResult, __MetadataBearer {
}
/**
 * <p>Describes the Dedicated Host reservations that are available to purchase.</p>
 *         <p>The results describe all of the Dedicated Host reservation offerings, including
 * 			offerings that might not match the instance family and Region of your Dedicated Hosts.
 * 			When purchasing an offering, ensure that the instance family and Region of the offering
 * 			matches that of the Dedicated Hosts with which it is to be associated. For more
 * 			information about supported instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated Hosts</a>
 *             in the <i>Amazon EC2 User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeHostReservationOfferingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeHostReservationOfferingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeHostReservationOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHostReservationOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeHostReservationOfferingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeHostReservationOfferingsCommand extends $Command<DescribeHostReservationOfferingsCommandInput, DescribeHostReservationOfferingsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeHostReservationOfferingsCommandInput;
    constructor(input: DescribeHostReservationOfferingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHostReservationOfferingsCommandInput, DescribeHostReservationOfferingsCommandOutput>;
    private serialize;
    private deserialize;
}
