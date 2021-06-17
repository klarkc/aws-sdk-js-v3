import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateApnsSandboxChannelRequest, UpdateApnsSandboxChannelResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateApnsSandboxChannelCommandInput extends UpdateApnsSandboxChannelRequest {
}
export interface UpdateApnsSandboxChannelCommandOutput extends UpdateApnsSandboxChannelResponse, __MetadataBearer {
}
/**
 * <p>Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateApnsSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateApnsSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateApnsSandboxChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApnsSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateApnsSandboxChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateApnsSandboxChannelCommand extends $Command<UpdateApnsSandboxChannelCommandInput, UpdateApnsSandboxChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateApnsSandboxChannelCommandInput;
    constructor(input: UpdateApnsSandboxChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApnsSandboxChannelCommandInput, UpdateApnsSandboxChannelCommandOutput>;
    private serialize;
    private deserialize;
}
