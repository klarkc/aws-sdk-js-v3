import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { PurchaseScheduledInstancesRequest, PurchaseScheduledInstancesResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PurchaseScheduledInstancesCommandInput extends PurchaseScheduledInstancesRequest {
}
export interface PurchaseScheduledInstancesCommandOutput extends PurchaseScheduledInstancesResult, __MetadataBearer {
}
/**
 * <p>Purchases the Scheduled Instances with the specified schedule.</p>
 *          <p>Scheduled Instances enable you to purchase Amazon EC2 compute capacity by the hour for a one-year term.
 *          Before you can purchase a Scheduled Instance, you must call <a>DescribeScheduledInstanceAvailability</a>
 *          to check for available schedules and obtain a purchase token. After you purchase a Scheduled Instance,
 *          you must call <a>RunScheduledInstances</a> during each scheduled time period.</p>
 *          <p>After you purchase a Scheduled Instance, you can't cancel, modify, or resell your purchase.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, PurchaseScheduledInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, PurchaseScheduledInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new PurchaseScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseScheduledInstancesCommandInput} for command's `input` shape.
 * @see {@link PurchaseScheduledInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PurchaseScheduledInstancesCommand extends $Command<PurchaseScheduledInstancesCommandInput, PurchaseScheduledInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: PurchaseScheduledInstancesCommandInput;
    constructor(input: PurchaseScheduledInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseScheduledInstancesCommandInput, PurchaseScheduledInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
