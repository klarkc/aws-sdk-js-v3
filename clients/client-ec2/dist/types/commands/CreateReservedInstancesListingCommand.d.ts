import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateReservedInstancesListingRequest, CreateReservedInstancesListingResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateReservedInstancesListingCommandInput extends CreateReservedInstancesListingRequest {
}
export interface CreateReservedInstancesListingCommandOutput extends CreateReservedInstancesListingResult, __MetadataBearer {
}
/**
 * <p>Creates a listing for Amazon EC2 Standard Reserved Instances to be sold in the Reserved Instance
 * 			Marketplace. You can submit one Standard Reserved Instance listing at a time. To get a list of your
 * 			Standard Reserved Instances, you can use the <a>DescribeReservedInstances</a> operation.</p>
 *          <note>
 *             <p>Only Standard Reserved Instances can be sold in the Reserved Instance Marketplace.
 *        Convertible Reserved Instances cannot be sold.</p>
 *          </note>
 * 		       <p>The Reserved Instance Marketplace matches sellers who want to resell Standard Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances.</p>
 * 		       <p>To sell your Standard Reserved Instances, you must first register as a seller in the Reserved Instance
 *       Marketplace. After completing the registration process, you can create a Reserved Instance
 *       Marketplace listing of some or all of your Standard Reserved Instances, and specify the upfront price
 *       to receive for them. Your Standard Reserved Instance listings then become available for purchase. To
 *       view the details of your Standard Reserved Instance listing, you can use the
 *         <a>DescribeReservedInstancesListings</a> operation.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the
 * 				<i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateReservedInstancesListingCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateReservedInstancesListingCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateReservedInstancesListingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReservedInstancesListingCommandInput} for command's `input` shape.
 * @see {@link CreateReservedInstancesListingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateReservedInstancesListingCommand extends $Command<CreateReservedInstancesListingCommandInput, CreateReservedInstancesListingCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateReservedInstancesListingCommandInput;
    constructor(input: CreateReservedInstancesListingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReservedInstancesListingCommandInput, CreateReservedInstancesListingCommandOutput>;
    private serialize;
    private deserialize;
}
