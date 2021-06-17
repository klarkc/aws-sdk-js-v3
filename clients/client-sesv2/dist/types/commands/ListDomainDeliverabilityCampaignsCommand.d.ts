import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { ListDomainDeliverabilityCampaignsRequest, ListDomainDeliverabilityCampaignsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDomainDeliverabilityCampaignsCommandInput extends ListDomainDeliverabilityCampaignsRequest {
}
export interface ListDomainDeliverabilityCampaignsCommandOutput extends ListDomainDeliverabilityCampaignsResponse, __MetadataBearer {
}
/**
 * <p>Retrieve deliverability data for all the campaigns that used a specific domain to send
 *             email during a specified time range. This data is available for a domain only if you
 *             enabled the Deliverability dashboard for the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListDomainDeliverabilityCampaignsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListDomainDeliverabilityCampaignsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new ListDomainDeliverabilityCampaignsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainDeliverabilityCampaignsCommandInput} for command's `input` shape.
 * @see {@link ListDomainDeliverabilityCampaignsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDomainDeliverabilityCampaignsCommand extends $Command<ListDomainDeliverabilityCampaignsCommandInput, ListDomainDeliverabilityCampaignsCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: ListDomainDeliverabilityCampaignsCommandInput;
    constructor(input: ListDomainDeliverabilityCampaignsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDomainDeliverabilityCampaignsCommandInput, ListDomainDeliverabilityCampaignsCommandOutput>;
    private serialize;
    private deserialize;
}
