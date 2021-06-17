import { PinpointSMSVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointSMSVoiceClient";
import { ListConfigurationSetsRequest, ListConfigurationSetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListConfigurationSetsCommandInput extends ListConfigurationSetsRequest {
}
export interface ListConfigurationSetsCommandOutput extends ListConfigurationSetsResponse, __MetadataBearer {
}
/**
 * List all of the configuration sets associated with your Amazon Pinpoint account in the current region.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, ListConfigurationSetsCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, ListConfigurationSetsCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * const client = new PinpointSMSVoiceClient(config);
 * const command = new ListConfigurationSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigurationSetsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationSetsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListConfigurationSetsCommand extends $Command<ListConfigurationSetsCommandInput, ListConfigurationSetsCommandOutput, PinpointSMSVoiceClientResolvedConfig> {
    readonly input: ListConfigurationSetsCommandInput;
    constructor(input: ListConfigurationSetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointSMSVoiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConfigurationSetsCommandInput, ListConfigurationSetsCommandOutput>;
    private serialize;
    private deserialize;
}
