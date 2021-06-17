import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateVoiceChannelRequest, UpdateVoiceChannelResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateVoiceChannelCommandInput extends UpdateVoiceChannelRequest {
}
export interface UpdateVoiceChannelCommandOutput extends UpdateVoiceChannelResponse, __MetadataBearer {
}
/**
 * <p>Enables the voice channel for an application or updates the status and settings of the voice channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateVoiceChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateVoiceChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateVoiceChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVoiceChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateVoiceChannelCommand extends $Command<UpdateVoiceChannelCommandInput, UpdateVoiceChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateVoiceChannelCommandInput;
    constructor(input: UpdateVoiceChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVoiceChannelCommandInput, UpdateVoiceChannelCommandOutput>;
    private serialize;
    private deserialize;
}
