import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetSmsChannelRequest, GetSmsChannelResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSmsChannelCommandInput extends GetSmsChannelRequest {
}
export interface GetSmsChannelCommandOutput extends GetSmsChannelResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of the SMS channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSmsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSmsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSmsChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSmsChannelCommandInput} for command's `input` shape.
 * @see {@link GetSmsChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSmsChannelCommand extends $Command<GetSmsChannelCommandInput, GetSmsChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetSmsChannelCommandInput;
    constructor(input: GetSmsChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSmsChannelCommandInput, GetSmsChannelCommandOutput>;
    private serialize;
    private deserialize;
}
