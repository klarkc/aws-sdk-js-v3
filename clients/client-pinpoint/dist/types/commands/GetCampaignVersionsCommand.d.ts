import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetCampaignVersionsRequest, GetCampaignVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCampaignVersionsCommandInput extends GetCampaignVersionsRequest {
}
export interface GetCampaignVersionsCommandOutput extends GetCampaignVersionsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status, configuration, and other settings for all versions of a campaign.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignVersionsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignVersionsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetCampaignVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCampaignVersionsCommandInput} for command's `input` shape.
 * @see {@link GetCampaignVersionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCampaignVersionsCommand extends $Command<GetCampaignVersionsCommandInput, GetCampaignVersionsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetCampaignVersionsCommandInput;
    constructor(input: GetCampaignVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCampaignVersionsCommandInput, GetCampaignVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
