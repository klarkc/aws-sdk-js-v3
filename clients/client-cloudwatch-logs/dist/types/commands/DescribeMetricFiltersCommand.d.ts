import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeMetricFiltersRequest, DescribeMetricFiltersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMetricFiltersCommandInput extends DescribeMetricFiltersRequest {
}
export interface DescribeMetricFiltersCommandOutput extends DescribeMetricFiltersResponse, __MetadataBearer {
}
/**
 * <p>Lists the specified metric filters. You can list all of the metric filters or filter
 *       the results by log name, prefix, metric name, or metric namespace. The results are
 *       ASCII-sorted by filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeMetricFiltersCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeMetricFiltersCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DescribeMetricFiltersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMetricFiltersCommandInput} for command's `input` shape.
 * @see {@link DescribeMetricFiltersCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMetricFiltersCommand extends $Command<DescribeMetricFiltersCommandInput, DescribeMetricFiltersCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DescribeMetricFiltersCommandInput;
    constructor(input: DescribeMetricFiltersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMetricFiltersCommandInput, DescribeMetricFiltersCommandOutput>;
    private serialize;
    private deserialize;
}
