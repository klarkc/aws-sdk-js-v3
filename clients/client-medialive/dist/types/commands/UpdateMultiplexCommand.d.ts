import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateMultiplexRequest, UpdateMultiplexResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMultiplexCommandInput extends UpdateMultiplexRequest {
}
export interface UpdateMultiplexCommandOutput extends UpdateMultiplexResponse, __MetadataBearer {
}
/**
 * Updates a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new UpdateMultiplexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMultiplexCommandInput} for command's `input` shape.
 * @see {@link UpdateMultiplexCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMultiplexCommand extends $Command<UpdateMultiplexCommandInput, UpdateMultiplexCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: UpdateMultiplexCommandInput;
    constructor(input: UpdateMultiplexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMultiplexCommandInput, UpdateMultiplexCommandOutput>;
    private serialize;
    private deserialize;
}
