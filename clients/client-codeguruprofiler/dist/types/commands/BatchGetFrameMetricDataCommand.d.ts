import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { BatchGetFrameMetricDataRequest, BatchGetFrameMetricDataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetFrameMetricDataCommandInput extends BatchGetFrameMetricDataRequest {
}
export interface BatchGetFrameMetricDataCommandOutput extends BatchGetFrameMetricDataResponse, __MetadataBearer {
}
/**
 * <p>
 *          Returns the time series of values for a requested list
 *          of frame metrics from a time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, BatchGetFrameMetricDataCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, BatchGetFrameMetricDataCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new BatchGetFrameMetricDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetFrameMetricDataCommandInput} for command's `input` shape.
 * @see {@link BatchGetFrameMetricDataCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetFrameMetricDataCommand extends $Command<BatchGetFrameMetricDataCommandInput, BatchGetFrameMetricDataCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: BatchGetFrameMetricDataCommandInput;
    constructor(input: BatchGetFrameMetricDataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetFrameMetricDataCommandInput, BatchGetFrameMetricDataCommandOutput>;
    private serialize;
    private deserialize;
}
