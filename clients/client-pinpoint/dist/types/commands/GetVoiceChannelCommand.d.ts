import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetVoiceChannelRequest, GetVoiceChannelResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetVoiceChannelCommandInput extends GetVoiceChannelRequest {
}
export interface GetVoiceChannelCommandOutput extends GetVoiceChannelResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of the voice channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetVoiceChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetVoiceChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetVoiceChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVoiceChannelCommandInput} for command's `input` shape.
 * @see {@link GetVoiceChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetVoiceChannelCommand extends $Command<GetVoiceChannelCommandInput, GetVoiceChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetVoiceChannelCommandInput;
    constructor(input: GetVoiceChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetVoiceChannelCommandInput, GetVoiceChannelCommandOutput>;
    private serialize;
    private deserialize;
}
