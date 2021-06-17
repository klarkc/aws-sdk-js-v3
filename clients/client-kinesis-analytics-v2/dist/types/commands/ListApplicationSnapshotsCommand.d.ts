import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { ListApplicationSnapshotsRequest, ListApplicationSnapshotsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListApplicationSnapshotsCommandInput extends ListApplicationSnapshotsRequest {
}
export interface ListApplicationSnapshotsCommandOutput extends ListApplicationSnapshotsResponse, __MetadataBearer {
}
/**
 * <p>Lists information about the current application snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, ListApplicationSnapshotsCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, ListApplicationSnapshotsCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new ListApplicationSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApplicationSnapshotsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListApplicationSnapshotsCommand extends $Command<ListApplicationSnapshotsCommandInput, ListApplicationSnapshotsCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: ListApplicationSnapshotsCommandInput;
    constructor(input: ListApplicationSnapshotsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListApplicationSnapshotsCommandInput, ListApplicationSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
