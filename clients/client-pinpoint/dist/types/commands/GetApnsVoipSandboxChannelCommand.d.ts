import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetApnsVoipSandboxChannelRequest, GetApnsVoipSandboxChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetApnsVoipSandboxChannelCommandInput extends GetApnsVoipSandboxChannelRequest {
}
export interface GetApnsVoipSandboxChannelCommandOutput extends GetApnsVoipSandboxChannelResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApnsVoipSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApnsVoipSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetApnsVoipSandboxChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApnsVoipSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link GetApnsVoipSandboxChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetApnsVoipSandboxChannelCommand extends $Command<GetApnsVoipSandboxChannelCommandInput, GetApnsVoipSandboxChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetApnsVoipSandboxChannelCommandInput;
    constructor(input: GetApnsVoipSandboxChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetApnsVoipSandboxChannelCommandInput, GetApnsVoipSandboxChannelCommandOutput>;
    private serialize;
    private deserialize;
}
