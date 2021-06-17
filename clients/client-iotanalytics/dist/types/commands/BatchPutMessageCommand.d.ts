import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { BatchPutMessageRequest, BatchPutMessageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchPutMessageCommandInput extends BatchPutMessageRequest {
}
export interface BatchPutMessageCommandOutput extends BatchPutMessageResponse, __MetadataBearer {
}
/**
 * <p>Sends messages to a channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, BatchPutMessageCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, BatchPutMessageCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new BatchPutMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchPutMessageCommandInput} for command's `input` shape.
 * @see {@link BatchPutMessageCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchPutMessageCommand extends $Command<BatchPutMessageCommandInput, BatchPutMessageCommandOutput, IoTAnalyticsClientResolvedConfig> {
    readonly input: BatchPutMessageCommandInput;
    constructor(input: BatchPutMessageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchPutMessageCommandInput, BatchPutMessageCommandOutput>;
    private serialize;
    private deserialize;
}
