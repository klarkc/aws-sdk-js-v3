import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateEmailChannelRequest, UpdateEmailChannelResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateEmailChannelCommandInput extends UpdateEmailChannelRequest {
}
export interface UpdateEmailChannelCommandOutput extends UpdateEmailChannelResponse, __MetadataBearer {
}
/**
 * <p>Enables the email channel for an application or updates the status and settings of the email channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateEmailChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateEmailChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateEmailChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEmailChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateEmailChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateEmailChannelCommand extends $Command<UpdateEmailChannelCommandInput, UpdateEmailChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateEmailChannelCommandInput;
    constructor(input: UpdateEmailChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEmailChannelCommandInput, UpdateEmailChannelCommandOutput>;
    private serialize;
    private deserialize;
}
