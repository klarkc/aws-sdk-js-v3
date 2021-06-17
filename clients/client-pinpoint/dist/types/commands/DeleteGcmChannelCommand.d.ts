import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteGcmChannelRequest, DeleteGcmChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteGcmChannelCommandInput extends DeleteGcmChannelRequest {
}
export interface DeleteGcmChannelCommandOutput extends DeleteGcmChannelResponse, __MetadataBearer {
}
/**
 * <p>Disables the GCM channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteGcmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteGcmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteGcmChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGcmChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteGcmChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteGcmChannelCommand extends $Command<DeleteGcmChannelCommandInput, DeleteGcmChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeleteGcmChannelCommandInput;
    constructor(input: DeleteGcmChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGcmChannelCommandInput, DeleteGcmChannelCommandOutput>;
    private serialize;
    private deserialize;
}
