import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { TestMetricFilterRequest, TestMetricFilterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TestMetricFilterCommandInput extends TestMetricFilterRequest {
}
export interface TestMetricFilterCommandOutput extends TestMetricFilterResponse, __MetadataBearer {
}
/**
 * <p>Tests the filter pattern of a metric filter against a sample of log event messages. You
 *       can use this operation to validate the correctness of a metric filter pattern.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, TestMetricFilterCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, TestMetricFilterCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new TestMetricFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestMetricFilterCommandInput} for command's `input` shape.
 * @see {@link TestMetricFilterCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TestMetricFilterCommand extends $Command<TestMetricFilterCommandInput, TestMetricFilterCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: TestMetricFilterCommandInput;
    constructor(input: TestMetricFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestMetricFilterCommandInput, TestMetricFilterCommandOutput>;
    private serialize;
    private deserialize;
}
