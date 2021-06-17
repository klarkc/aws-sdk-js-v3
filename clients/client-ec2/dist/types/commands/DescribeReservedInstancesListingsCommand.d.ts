import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeReservedInstancesListingsRequest, DescribeReservedInstancesListingsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReservedInstancesListingsCommandInput extends DescribeReservedInstancesListingsRequest {
}
export interface DescribeReservedInstancesListingsCommandOutput extends DescribeReservedInstancesListingsResult, __MetadataBearer {
}
/**
 * <p>Describes your account's Reserved Instance listings in the Reserved Instance Marketplace.</p>
 * 		       <p>The Reserved Instance Marketplace matches sellers who want to resell Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances.</p>
 * 		       <p>As a seller, you choose to list some or all of your Reserved Instances, and you specify the upfront price to receive for them. Your Reserved Instances are then listed in the Reserved Instance Marketplace and are available for purchase.</p>
 * 		       <p>As a buyer, you specify the configuration of the Reserved Instance to purchase, and the Marketplace matches what you're searching for with what's available. The Marketplace first sells the lowest priced Reserved Instances to you, and continues to sell available Reserved Instance listings to you until your demand is met. You are charged based on the total price of all of the listings that you purchase.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
 *         in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeReservedInstancesListingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeReservedInstancesListingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeReservedInstancesListingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedInstancesListingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedInstancesListingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReservedInstancesListingsCommand extends $Command<DescribeReservedInstancesListingsCommandInput, DescribeReservedInstancesListingsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeReservedInstancesListingsCommandInput;
    constructor(input: DescribeReservedInstancesListingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedInstancesListingsCommandInput, DescribeReservedInstancesListingsCommandOutput>;
    private serialize;
    private deserialize;
}
