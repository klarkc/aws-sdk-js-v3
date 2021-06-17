import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetCampaignDateRangeKpiRequest, GetCampaignDateRangeKpiResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCampaignDateRangeKpiCommandInput extends GetCampaignDateRangeKpiRequest {
}
export interface GetCampaignDateRangeKpiCommandOutput extends GetCampaignDateRangeKpiResponse, __MetadataBearer {
}
/**
 * <p>Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignDateRangeKpiCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignDateRangeKpiCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetCampaignDateRangeKpiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCampaignDateRangeKpiCommandInput} for command's `input` shape.
 * @see {@link GetCampaignDateRangeKpiCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCampaignDateRangeKpiCommand extends $Command<GetCampaignDateRangeKpiCommandInput, GetCampaignDateRangeKpiCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetCampaignDateRangeKpiCommandInput;
    constructor(input: GetCampaignDateRangeKpiCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCampaignDateRangeKpiCommandInput, GetCampaignDateRangeKpiCommandOutput>;
    private serialize;
    private deserialize;
}
