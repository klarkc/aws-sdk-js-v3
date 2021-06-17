import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteApnsVoipSandboxChannelRequest, DeleteApnsVoipSandboxChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteApnsVoipSandboxChannelCommandInput extends DeleteApnsVoipSandboxChannelRequest {
}
export interface DeleteApnsVoipSandboxChannelCommandOutput extends DeleteApnsVoipSandboxChannelResponse, __MetadataBearer {
}
/**
 * <p>Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteApnsVoipSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteApnsVoipSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteApnsVoipSandboxChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApnsVoipSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteApnsVoipSandboxChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteApnsVoipSandboxChannelCommand extends $Command<DeleteApnsVoipSandboxChannelCommandInput, DeleteApnsVoipSandboxChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeleteApnsVoipSandboxChannelCommandInput;
    constructor(input: DeleteApnsVoipSandboxChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApnsVoipSandboxChannelCommandInput, DeleteApnsVoipSandboxChannelCommandOutput>;
    private serialize;
    private deserialize;
}
