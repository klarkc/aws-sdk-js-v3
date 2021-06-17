import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { StartMultiplexRequest, StartMultiplexResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartMultiplexCommandInput extends StartMultiplexRequest {
}
export interface StartMultiplexCommandOutput extends StartMultiplexResponse, __MetadataBearer {
}
/**
 * Start (run) the multiplex. Starting the multiplex does not start the channels. You must explicitly start each channel.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, StartMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, StartMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new StartMultiplexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMultiplexCommandInput} for command's `input` shape.
 * @see {@link StartMultiplexCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartMultiplexCommand extends $Command<StartMultiplexCommandInput, StartMultiplexCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: StartMultiplexCommandInput;
    constructor(input: StartMultiplexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMultiplexCommandInput, StartMultiplexCommandOutput>;
    private serialize;
    private deserialize;
}
