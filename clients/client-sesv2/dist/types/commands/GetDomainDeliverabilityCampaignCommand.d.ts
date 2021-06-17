import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { GetDomainDeliverabilityCampaignRequest, GetDomainDeliverabilityCampaignResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDomainDeliverabilityCampaignCommandInput extends GetDomainDeliverabilityCampaignRequest {
}
export interface GetDomainDeliverabilityCampaignCommandOutput extends GetDomainDeliverabilityCampaignResponse, __MetadataBearer {
}
/**
 * <p>Retrieve all the deliverability data for a specific campaign. This data is available
 *             for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetDomainDeliverabilityCampaignCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetDomainDeliverabilityCampaignCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetDomainDeliverabilityCampaignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainDeliverabilityCampaignCommandInput} for command's `input` shape.
 * @see {@link GetDomainDeliverabilityCampaignCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDomainDeliverabilityCampaignCommand extends $Command<GetDomainDeliverabilityCampaignCommandInput, GetDomainDeliverabilityCampaignCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: GetDomainDeliverabilityCampaignCommandInput;
    constructor(input: GetDomainDeliverabilityCampaignCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDomainDeliverabilityCampaignCommandInput, GetDomainDeliverabilityCampaignCommandOutput>;
    private serialize;
    private deserialize;
}
