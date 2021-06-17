import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { CreateApplicationSnapshotRequest, CreateApplicationSnapshotResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateApplicationSnapshotCommandInput extends CreateApplicationSnapshotRequest {
}
export interface CreateApplicationSnapshotCommandOutput extends CreateApplicationSnapshotResponse, __MetadataBearer {
}
/**
 * <p>Creates a snapshot of the application's state data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, CreateApplicationSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, CreateApplicationSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new CreateApplicationSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApplicationSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationSnapshotCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateApplicationSnapshotCommand extends $Command<CreateApplicationSnapshotCommandInput, CreateApplicationSnapshotCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: CreateApplicationSnapshotCommandInput;
    constructor(input: CreateApplicationSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateApplicationSnapshotCommandInput, CreateApplicationSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
