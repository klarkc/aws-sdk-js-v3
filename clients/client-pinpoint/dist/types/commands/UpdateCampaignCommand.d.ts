import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateCampaignRequest, UpdateCampaignResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateCampaignCommandInput extends UpdateCampaignRequest {
}
export interface UpdateCampaignCommandOutput extends UpdateCampaignResponse, __MetadataBearer {
}
/**
 * <p>Updates the configuration and other settings for a campaign.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateCampaignCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateCampaignCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateCampaignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCampaignCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateCampaignCommand extends $Command<UpdateCampaignCommandInput, UpdateCampaignCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateCampaignCommandInput;
    constructor(input: UpdateCampaignCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCampaignCommandInput, UpdateCampaignCommandOutput>;
    private serialize;
    private deserialize;
}
