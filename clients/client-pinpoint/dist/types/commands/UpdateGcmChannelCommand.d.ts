import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateGcmChannelRequest, UpdateGcmChannelResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateGcmChannelCommandInput extends UpdateGcmChannelRequest {
}
export interface UpdateGcmChannelCommandOutput extends UpdateGcmChannelResponse, __MetadataBearer {
}
/**
 * <p>Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateGcmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateGcmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateGcmChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGcmChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateGcmChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateGcmChannelCommand extends $Command<UpdateGcmChannelCommandInput, UpdateGcmChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateGcmChannelCommandInput;
    constructor(input: UpdateGcmChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGcmChannelCommandInput, UpdateGcmChannelCommandOutput>;
    private serialize;
    private deserialize;
}
