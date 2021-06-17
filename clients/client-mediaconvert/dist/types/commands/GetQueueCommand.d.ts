import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { GetQueueRequest, GetQueueResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetQueueCommandInput extends GetQueueRequest {
}
export interface GetQueueCommandOutput extends GetQueueResponse, __MetadataBearer {
}
/**
 * Retrieve the JSON for a specific queue.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, GetQueueCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, GetQueueCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new GetQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQueueCommandInput} for command's `input` shape.
 * @see {@link GetQueueCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetQueueCommand extends $Command<GetQueueCommandInput, GetQueueCommandOutput, MediaConvertClientResolvedConfig> {
    readonly input: GetQueueCommandInput;
    constructor(input: GetQueueCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConvertClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetQueueCommandInput, GetQueueCommandOutput>;
    private serialize;
    private deserialize;
}
