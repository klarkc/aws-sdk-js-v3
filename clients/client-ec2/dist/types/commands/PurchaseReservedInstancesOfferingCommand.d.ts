import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { PurchaseReservedInstancesOfferingRequest, PurchaseReservedInstancesOfferingResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PurchaseReservedInstancesOfferingCommandInput extends PurchaseReservedInstancesOfferingRequest {
}
export interface PurchaseReservedInstancesOfferingCommandOutput extends PurchaseReservedInstancesOfferingResult, __MetadataBearer {
}
/**
 * <p>Purchases a Reserved Instance for use with your account. With Reserved Instances, you pay a lower
 *        hourly rate compared to On-Demand instance pricing.</p>
 * 		       <p>Use <a>DescribeReservedInstancesOfferings</a> to get a list of Reserved Instance offerings
 * 			that match your specifications. After you've purchased a Reserved Instance, you can check for your
 * 			new Reserved Instance with <a>DescribeReservedInstances</a>.</p>
 *          <p>To queue a purchase for a future date and time, specify a purchase time. If you do not specify a
 *       purchase time, the default is the current time.</p>
 *    	     <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html">Reserved Instances</a> and
 *    	   <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
 *    	   in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, PurchaseReservedInstancesOfferingCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, PurchaseReservedInstancesOfferingCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new PurchaseReservedInstancesOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseReservedInstancesOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedInstancesOfferingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PurchaseReservedInstancesOfferingCommand extends $Command<PurchaseReservedInstancesOfferingCommandInput, PurchaseReservedInstancesOfferingCommandOutput, EC2ClientResolvedConfig> {
    readonly input: PurchaseReservedInstancesOfferingCommandInput;
    constructor(input: PurchaseReservedInstancesOfferingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseReservedInstancesOfferingCommandInput, PurchaseReservedInstancesOfferingCommandOutput>;
    private serialize;
    private deserialize;
}
