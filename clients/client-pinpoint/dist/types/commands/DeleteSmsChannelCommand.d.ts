import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteSmsChannelRequest, DeleteSmsChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSmsChannelCommandInput extends DeleteSmsChannelRequest {
}
export interface DeleteSmsChannelCommandOutput extends DeleteSmsChannelResponse, __MetadataBearer {
}
/**
 * <p>Disables the SMS channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteSmsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteSmsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteSmsChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSmsChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteSmsChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSmsChannelCommand extends $Command<DeleteSmsChannelCommandInput, DeleteSmsChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeleteSmsChannelCommandInput;
    constructor(input: DeleteSmsChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSmsChannelCommandInput, DeleteSmsChannelCommandOutput>;
    private serialize;
    private deserialize;
}
