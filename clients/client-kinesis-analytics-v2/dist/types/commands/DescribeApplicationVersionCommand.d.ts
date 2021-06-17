import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { DescribeApplicationVersionRequest, DescribeApplicationVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeApplicationVersionCommandInput extends DescribeApplicationVersionRequest {
}
export interface DescribeApplicationVersionCommandOutput extends DescribeApplicationVersionResponse, __MetadataBearer {
}
/**
 * <p>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the <a>ListApplicationVersions</a> operation.</p>
 *          <note>
 *             <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DescribeApplicationVersionCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DescribeApplicationVersionCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new DescribeApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeApplicationVersionCommand extends $Command<DescribeApplicationVersionCommandInput, DescribeApplicationVersionCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: DescribeApplicationVersionCommandInput;
    constructor(input: DescribeApplicationVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeApplicationVersionCommandInput, DescribeApplicationVersionCommandOutput>;
    private serialize;
    private deserialize;
}
