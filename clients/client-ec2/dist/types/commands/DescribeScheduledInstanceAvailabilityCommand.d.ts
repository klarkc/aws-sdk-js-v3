import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeScheduledInstanceAvailabilityRequest, DescribeScheduledInstanceAvailabilityResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeScheduledInstanceAvailabilityCommandInput extends DescribeScheduledInstanceAvailabilityRequest {
}
export interface DescribeScheduledInstanceAvailabilityCommandOutput extends DescribeScheduledInstanceAvailabilityResult, __MetadataBearer {
}
/**
 * <p>Finds available schedules that meet the specified criteria.</p>
 *          <p>You can search for an available schedule no more than 3 months in advance. You must meet the minimum required duration of 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</p>
 *          <p>After you find a schedule that meets your needs, call <a>PurchaseScheduledInstances</a>
 *          to purchase Scheduled Instances with that schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeScheduledInstanceAvailabilityCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeScheduledInstanceAvailabilityCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeScheduledInstanceAvailabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScheduledInstanceAvailabilityCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledInstanceAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeScheduledInstanceAvailabilityCommand extends $Command<DescribeScheduledInstanceAvailabilityCommandInput, DescribeScheduledInstanceAvailabilityCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeScheduledInstanceAvailabilityCommandInput;
    constructor(input: DescribeScheduledInstanceAvailabilityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScheduledInstanceAvailabilityCommandInput, DescribeScheduledInstanceAvailabilityCommandOutput>;
    private serialize;
    private deserialize;
}
