import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { BatchDeleteRequest, BatchDeleteResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDeleteCommandInput extends BatchDeleteRequest {
}
export interface BatchDeleteCommandOutput extends BatchDeleteResponse, __MetadataBearer {
}
/**
 * Starts delete of resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, BatchDeleteCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, BatchDeleteCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new BatchDeleteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDeleteCommand extends $Command<BatchDeleteCommandInput, BatchDeleteCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: BatchDeleteCommandInput;
    constructor(input: BatchDeleteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteCommandInput, BatchDeleteCommandOutput>;
    private serialize;
    private deserialize;
}
