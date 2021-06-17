import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { DeleteApplicationSnapshotRequest, DeleteApplicationSnapshotResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteApplicationSnapshotCommandInput extends DeleteApplicationSnapshotRequest {
}
export interface DeleteApplicationSnapshotCommandOutput extends DeleteApplicationSnapshotResponse, __MetadataBearer {
}
/**
 * <p>Deletes a snapshot of application state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteApplicationSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteApplicationSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new DeleteApplicationSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationSnapshotCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteApplicationSnapshotCommand extends $Command<DeleteApplicationSnapshotCommandInput, DeleteApplicationSnapshotCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: DeleteApplicationSnapshotCommandInput;
    constructor(input: DeleteApplicationSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApplicationSnapshotCommandInput, DeleteApplicationSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
