import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateSmsChannelRequest, UpdateSmsChannelResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSmsChannelCommandInput extends UpdateSmsChannelRequest {
}
export interface UpdateSmsChannelCommandOutput extends UpdateSmsChannelResponse, __MetadataBearer {
}
/**
 * <p>Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateSmsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateSmsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateSmsChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSmsChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateSmsChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSmsChannelCommand extends $Command<UpdateSmsChannelCommandInput, UpdateSmsChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateSmsChannelCommandInput;
    constructor(input: UpdateSmsChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSmsChannelCommandInput, UpdateSmsChannelCommandOutput>;
    private serialize;
    private deserialize;
}
