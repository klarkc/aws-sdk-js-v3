import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteApnsChannelRequest, DeleteApnsChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteApnsChannelCommandInput extends DeleteApnsChannelRequest {
}
export interface DeleteApnsChannelCommandOutput extends DeleteApnsChannelResponse, __MetadataBearer {
}
/**
 * <p>Disables the APNs channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteApnsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteApnsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteApnsChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApnsChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteApnsChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteApnsChannelCommand extends $Command<DeleteApnsChannelCommandInput, DeleteApnsChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeleteApnsChannelCommandInput;
    constructor(input: DeleteApnsChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApnsChannelCommandInput, DeleteApnsChannelCommandOutput>;
    private serialize;
    private deserialize;
}
