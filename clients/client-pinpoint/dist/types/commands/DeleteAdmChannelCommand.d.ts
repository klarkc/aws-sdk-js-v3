import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteAdmChannelRequest, DeleteAdmChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAdmChannelCommandInput extends DeleteAdmChannelRequest {
}
export interface DeleteAdmChannelCommandOutput extends DeleteAdmChannelResponse, __MetadataBearer {
}
/**
 * <p>Disables the ADM channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteAdmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteAdmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteAdmChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAdmChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteAdmChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAdmChannelCommand extends $Command<DeleteAdmChannelCommandInput, DeleteAdmChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeleteAdmChannelCommandInput;
    constructor(input: DeleteAdmChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAdmChannelCommandInput, DeleteAdmChannelCommandOutput>;
    private serialize;
    private deserialize;
}
