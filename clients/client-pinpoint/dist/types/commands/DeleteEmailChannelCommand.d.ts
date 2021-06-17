import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteEmailChannelRequest, DeleteEmailChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteEmailChannelCommandInput extends DeleteEmailChannelRequest {
}
export interface DeleteEmailChannelCommandOutput extends DeleteEmailChannelResponse, __MetadataBearer {
}
/**
 * <p>Disables the email channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteEmailChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteEmailChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteEmailChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEmailChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteEmailChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteEmailChannelCommand extends $Command<DeleteEmailChannelCommandInput, DeleteEmailChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeleteEmailChannelCommandInput;
    constructor(input: DeleteEmailChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEmailChannelCommandInput, DeleteEmailChannelCommandOutput>;
    private serialize;
    private deserialize;
}
