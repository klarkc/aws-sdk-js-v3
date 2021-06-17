import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateAdmChannelRequest, UpdateAdmChannelResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAdmChannelCommandInput extends UpdateAdmChannelRequest {
}
export interface UpdateAdmChannelCommandOutput extends UpdateAdmChannelResponse, __MetadataBearer {
}
/**
 * <p>Enables the ADM channel for an application or updates the status and settings of the ADM channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateAdmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateAdmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateAdmChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAdmChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateAdmChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAdmChannelCommand extends $Command<UpdateAdmChannelCommandInput, UpdateAdmChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateAdmChannelCommandInput;
    constructor(input: UpdateAdmChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAdmChannelCommandInput, UpdateAdmChannelCommandOutput>;
    private serialize;
    private deserialize;
}
