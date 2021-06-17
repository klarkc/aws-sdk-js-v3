import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { DeleteQueueRequest, DeleteQueueResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteQueueCommandInput extends DeleteQueueRequest {
}
export interface DeleteQueueCommandOutput extends DeleteQueueResponse, __MetadataBearer {
}
/**
 * Permanently delete a queue you have created.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, DeleteQueueCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, DeleteQueueCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new DeleteQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQueueCommandInput} for command's `input` shape.
 * @see {@link DeleteQueueCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteQueueCommand extends $Command<DeleteQueueCommandInput, DeleteQueueCommandOutput, MediaConvertClientResolvedConfig> {
    readonly input: DeleteQueueCommandInput;
    constructor(input: DeleteQueueCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConvertClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteQueueCommandInput, DeleteQueueCommandOutput>;
    private serialize;
    private deserialize;
}
