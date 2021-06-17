import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateApnsVoipSandboxChannelRequest, UpdateApnsVoipSandboxChannelResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateApnsVoipSandboxChannelCommandInput extends UpdateApnsVoipSandboxChannelRequest {
}
export interface UpdateApnsVoipSandboxChannelCommandOutput extends UpdateApnsVoipSandboxChannelResponse, __MetadataBearer {
}
/**
 * <p>Enables the APNs VoIP sandbox channel for an application or updates the status and settings of the APNs VoIP sandbox channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateApnsVoipSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateApnsVoipSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateApnsVoipSandboxChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApnsVoipSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateApnsVoipSandboxChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateApnsVoipSandboxChannelCommand extends $Command<UpdateApnsVoipSandboxChannelCommandInput, UpdateApnsVoipSandboxChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateApnsVoipSandboxChannelCommandInput;
    constructor(input: UpdateApnsVoipSandboxChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApnsVoipSandboxChannelCommandInput, UpdateApnsVoipSandboxChannelCommandOutput>;
    private serialize;
    private deserialize;
}
