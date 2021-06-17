import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { StopMultiplexRequest, StopMultiplexResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopMultiplexCommandInput extends StopMultiplexRequest {
}
export interface StopMultiplexCommandOutput extends StopMultiplexResponse, __MetadataBearer {
}
/**
 * Stops a running multiplex. If the multiplex isn't running, this action has no effect.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, StopMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, StopMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new StopMultiplexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopMultiplexCommandInput} for command's `input` shape.
 * @see {@link StopMultiplexCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopMultiplexCommand extends $Command<StopMultiplexCommandInput, StopMultiplexCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: StopMultiplexCommandInput;
    constructor(input: StopMultiplexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopMultiplexCommandInput, StopMultiplexCommandOutput>;
    private serialize;
    private deserialize;
}
