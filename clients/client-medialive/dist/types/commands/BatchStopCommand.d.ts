import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { BatchStopRequest, BatchStopResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchStopCommandInput extends BatchStopRequest {
}
export interface BatchStopCommandOutput extends BatchStopResponse, __MetadataBearer {
}
/**
 * Stops running resources
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, BatchStopCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, BatchStopCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new BatchStopCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchStopCommandInput} for command's `input` shape.
 * @see {@link BatchStopCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchStopCommand extends $Command<BatchStopCommandInput, BatchStopCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: BatchStopCommandInput;
    constructor(input: BatchStopCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchStopCommandInput, BatchStopCommandOutput>;
    private serialize;
    private deserialize;
}
