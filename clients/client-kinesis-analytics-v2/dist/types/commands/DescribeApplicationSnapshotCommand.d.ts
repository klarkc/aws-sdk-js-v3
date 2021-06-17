import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { DescribeApplicationSnapshotRequest, DescribeApplicationSnapshotResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeApplicationSnapshotCommandInput extends DescribeApplicationSnapshotRequest {
}
export interface DescribeApplicationSnapshotCommandOutput extends DescribeApplicationSnapshotResponse, __MetadataBearer {
}
/**
 * <p>Returns information about a snapshot of application state data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DescribeApplicationSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DescribeApplicationSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new DescribeApplicationSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicationSnapshotCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationSnapshotCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeApplicationSnapshotCommand extends $Command<DescribeApplicationSnapshotCommandInput, DescribeApplicationSnapshotCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: DescribeApplicationSnapshotCommandInput;
    constructor(input: DescribeApplicationSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeApplicationSnapshotCommandInput, DescribeApplicationSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
