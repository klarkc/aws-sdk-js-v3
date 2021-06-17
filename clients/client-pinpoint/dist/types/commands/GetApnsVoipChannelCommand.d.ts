import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetApnsVoipChannelRequest, GetApnsVoipChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetApnsVoipChannelCommandInput extends GetApnsVoipChannelRequest {
}
export interface GetApnsVoipChannelCommandOutput extends GetApnsVoipChannelResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of the APNs VoIP channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApnsVoipChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApnsVoipChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetApnsVoipChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApnsVoipChannelCommandInput} for command's `input` shape.
 * @see {@link GetApnsVoipChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetApnsVoipChannelCommand extends $Command<GetApnsVoipChannelCommandInput, GetApnsVoipChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetApnsVoipChannelCommandInput;
    constructor(input: GetApnsVoipChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetApnsVoipChannelCommandInput, GetApnsVoipChannelCommandOutput>;
    private serialize;
    private deserialize;
}
