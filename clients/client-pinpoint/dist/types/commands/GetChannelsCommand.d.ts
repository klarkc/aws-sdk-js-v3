import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetChannelsRequest, GetChannelsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetChannelsCommandInput extends GetChannelsRequest {
}
export interface GetChannelsCommandOutput extends GetChannelsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the history and status of each channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetChannelsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetChannelsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChannelsCommandInput} for command's `input` shape.
 * @see {@link GetChannelsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetChannelsCommand extends $Command<GetChannelsCommandInput, GetChannelsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetChannelsCommandInput;
    constructor(input: GetChannelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetChannelsCommandInput, GetChannelsCommandOutput>;
    private serialize;
    private deserialize;
}
