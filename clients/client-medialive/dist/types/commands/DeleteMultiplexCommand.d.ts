import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteMultiplexRequest, DeleteMultiplexResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteMultiplexCommandInput extends DeleteMultiplexRequest {
}
export interface DeleteMultiplexCommandOutput extends DeleteMultiplexResponse, __MetadataBearer {
}
/**
 * Delete a multiplex. The multiplex must be idle.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DeleteMultiplexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMultiplexCommandInput} for command's `input` shape.
 * @see {@link DeleteMultiplexCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMultiplexCommand extends $Command<DeleteMultiplexCommandInput, DeleteMultiplexCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: DeleteMultiplexCommandInput;
    constructor(input: DeleteMultiplexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMultiplexCommandInput, DeleteMultiplexCommandOutput>;
    private serialize;
    private deserialize;
}
