import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetCampaignsRequest, GetCampaignsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCampaignsCommandInput extends GetCampaignsRequest {
}
export interface GetCampaignsCommandOutput extends GetCampaignsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetCampaignsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCampaignsCommandInput} for command's `input` shape.
 * @see {@link GetCampaignsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCampaignsCommand extends $Command<GetCampaignsCommandInput, GetCampaignsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetCampaignsCommandInput;
    constructor(input: GetCampaignsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCampaignsCommandInput, GetCampaignsCommandOutput>;
    private serialize;
    private deserialize;
}
