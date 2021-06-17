import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteApnsSandboxChannelRequest, DeleteApnsSandboxChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteApnsSandboxChannelCommandInput extends DeleteApnsSandboxChannelRequest {
}
export interface DeleteApnsSandboxChannelCommandOutput extends DeleteApnsSandboxChannelResponse, __MetadataBearer {
}
/**
 * <p>Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteApnsSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteApnsSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteApnsSandboxChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApnsSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteApnsSandboxChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteApnsSandboxChannelCommand extends $Command<DeleteApnsSandboxChannelCommandInput, DeleteApnsSandboxChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeleteApnsSandboxChannelCommandInput;
    constructor(input: DeleteApnsSandboxChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApnsSandboxChannelCommandInput, DeleteApnsSandboxChannelCommandOutput>;
    private serialize;
    private deserialize;
}
