import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteApnsVoipChannelRequest, DeleteApnsVoipChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteApnsVoipChannelCommandInput extends DeleteApnsVoipChannelRequest {
}
export interface DeleteApnsVoipChannelCommandOutput extends DeleteApnsVoipChannelResponse, __MetadataBearer {
}
/**
 * <p>Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteApnsVoipChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteApnsVoipChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteApnsVoipChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApnsVoipChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteApnsVoipChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteApnsVoipChannelCommand extends $Command<DeleteApnsVoipChannelCommandInput, DeleteApnsVoipChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeleteApnsVoipChannelCommandInput;
    constructor(input: DeleteApnsVoipChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApnsVoipChannelCommandInput, DeleteApnsVoipChannelCommandOutput>;
    private serialize;
    private deserialize;
}
