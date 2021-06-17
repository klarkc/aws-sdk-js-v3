import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { GetDeliverabilityDashboardOptionsRequest, GetDeliverabilityDashboardOptionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDeliverabilityDashboardOptionsCommandInput extends GetDeliverabilityDashboardOptionsRequest {
}
export interface GetDeliverabilityDashboardOptionsCommandOutput extends GetDeliverabilityDashboardOptionsResponse, __MetadataBearer {
}
/**
 * <p>Retrieve information about the status of the Deliverability dashboard for your account. When
 *             the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other
 *             metrics for the domains that you use to send email. You also gain the ability to perform
 *             predictive inbox placement tests.</p>
 *
 *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon SES and other AWS services. For more
 *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetDeliverabilityDashboardOptionsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetDeliverabilityDashboardOptionsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetDeliverabilityDashboardOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeliverabilityDashboardOptionsCommandInput} for command's `input` shape.
 * @see {@link GetDeliverabilityDashboardOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDeliverabilityDashboardOptionsCommand extends $Command<GetDeliverabilityDashboardOptionsCommandInput, GetDeliverabilityDashboardOptionsCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: GetDeliverabilityDashboardOptionsCommandInput;
    constructor(input: GetDeliverabilityDashboardOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeliverabilityDashboardOptionsCommandInput, GetDeliverabilityDashboardOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
