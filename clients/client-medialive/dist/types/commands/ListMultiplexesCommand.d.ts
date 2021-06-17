import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListMultiplexesRequest, ListMultiplexesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMultiplexesCommandInput extends ListMultiplexesRequest {
}
export interface ListMultiplexesCommandOutput extends ListMultiplexesResponse, __MetadataBearer {
}
/**
 * Retrieve a list of the existing multiplexes.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListMultiplexesCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListMultiplexesCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListMultiplexesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMultiplexesCommandInput} for command's `input` shape.
 * @see {@link ListMultiplexesCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMultiplexesCommand extends $Command<ListMultiplexesCommandInput, ListMultiplexesCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: ListMultiplexesCommandInput;
    constructor(input: ListMultiplexesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMultiplexesCommandInput, ListMultiplexesCommandOutput>;
    private serialize;
    private deserialize;
}
