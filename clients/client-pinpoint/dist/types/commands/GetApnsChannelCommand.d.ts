import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetApnsChannelRequest, GetApnsChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetApnsChannelCommandInput extends GetApnsChannelRequest {
}
export interface GetApnsChannelCommandOutput extends GetApnsChannelResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of the APNs channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApnsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApnsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetApnsChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApnsChannelCommandInput} for command's `input` shape.
 * @see {@link GetApnsChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetApnsChannelCommand extends $Command<GetApnsChannelCommandInput, GetApnsChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetApnsChannelCommandInput;
    constructor(input: GetApnsChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetApnsChannelCommandInput, GetApnsChannelCommandOutput>;
    private serialize;
    private deserialize;
}
