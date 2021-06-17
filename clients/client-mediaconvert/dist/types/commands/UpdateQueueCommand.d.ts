import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { UpdateQueueRequest, UpdateQueueResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateQueueCommandInput extends UpdateQueueRequest {
}
export interface UpdateQueueCommandOutput extends UpdateQueueResponse, __MetadataBearer {
}
/**
 * Modify one of your existing queues.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, UpdateQueueCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, UpdateQueueCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new UpdateQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateQueueCommand extends $Command<UpdateQueueCommandInput, UpdateQueueCommandOutput, MediaConvertClientResolvedConfig> {
    readonly input: UpdateQueueCommandInput;
    constructor(input: UpdateQueueCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConvertClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateQueueCommandInput, UpdateQueueCommandOutput>;
    private serialize;
    private deserialize;
}
