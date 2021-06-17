import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetCampaignRequest, GetCampaignResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCampaignCommandInput extends GetCampaignRequest {
}
export interface GetCampaignCommandOutput extends GetCampaignResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status, configuration, and other settings for a campaign.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetCampaignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCampaignCommandInput} for command's `input` shape.
 * @see {@link GetCampaignCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCampaignCommand extends $Command<GetCampaignCommandInput, GetCampaignCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetCampaignCommandInput;
    constructor(input: GetCampaignCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCampaignCommandInput, GetCampaignCommandOutput>;
    private serialize;
    private deserialize;
}
