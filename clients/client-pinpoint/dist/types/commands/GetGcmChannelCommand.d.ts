import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetGcmChannelRequest, GetGcmChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetGcmChannelCommandInput extends GetGcmChannelRequest {
}
export interface GetGcmChannelCommandOutput extends GetGcmChannelResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of the GCM channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetGcmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetGcmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetGcmChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGcmChannelCommandInput} for command's `input` shape.
 * @see {@link GetGcmChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetGcmChannelCommand extends $Command<GetGcmChannelCommandInput, GetGcmChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetGcmChannelCommandInput;
    constructor(input: GetGcmChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGcmChannelCommandInput, GetGcmChannelCommandOutput>;
    private serialize;
    private deserialize;
}
