import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateApnsChannelRequest, UpdateApnsChannelResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateApnsChannelCommandInput extends UpdateApnsChannelRequest {
}
export interface UpdateApnsChannelCommandOutput extends UpdateApnsChannelResponse, __MetadataBearer {
}
/**
 * <p>Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateApnsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateApnsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateApnsChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApnsChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateApnsChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateApnsChannelCommand extends $Command<UpdateApnsChannelCommandInput, UpdateApnsChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateApnsChannelCommandInput;
    constructor(input: UpdateApnsChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApnsChannelCommandInput, UpdateApnsChannelCommandOutput>;
    private serialize;
    private deserialize;
}
