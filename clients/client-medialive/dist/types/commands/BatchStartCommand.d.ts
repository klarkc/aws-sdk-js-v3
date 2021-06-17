import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { BatchStartRequest, BatchStartResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchStartCommandInput extends BatchStartRequest {
}
export interface BatchStartCommandOutput extends BatchStartResponse, __MetadataBearer {
}
/**
 * Starts existing resources
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, BatchStartCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, BatchStartCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new BatchStartCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchStartCommandInput} for command's `input` shape.
 * @see {@link BatchStartCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchStartCommand extends $Command<BatchStartCommandInput, BatchStartCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: BatchStartCommandInput;
    constructor(input: BatchStartCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchStartCommandInput, BatchStartCommandOutput>;
    private serialize;
    private deserialize;
}
