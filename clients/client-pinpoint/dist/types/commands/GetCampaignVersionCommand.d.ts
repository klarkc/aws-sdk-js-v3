import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetCampaignVersionRequest, GetCampaignVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCampaignVersionCommandInput extends GetCampaignVersionRequest {
}
export interface GetCampaignVersionCommandOutput extends GetCampaignVersionResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status, configuration, and other settings for a specific version of a campaign.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignVersionCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignVersionCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetCampaignVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCampaignVersionCommandInput} for command's `input` shape.
 * @see {@link GetCampaignVersionCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCampaignVersionCommand extends $Command<GetCampaignVersionCommandInput, GetCampaignVersionCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetCampaignVersionCommandInput;
    constructor(input: GetCampaignVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCampaignVersionCommandInput, GetCampaignVersionCommandOutput>;
    private serialize;
    private deserialize;
}
