import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { IncreaseStreamRetentionPeriodInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface IncreaseStreamRetentionPeriodCommandInput extends IncreaseStreamRetentionPeriodInput {
}
export interface IncreaseStreamRetentionPeriodCommandOutput extends __MetadataBearer {
}
/**
 * <p>Increases the Kinesis data stream's retention period, which is the length of time
 *             data records are accessible after they are added to the stream. The maximum value of a
 *             stream's retention period is 168 hours (7 days).</p>
 *         <p>If you choose a longer stream retention period, this operation increases the time
 *             period during which records that have not yet expired are accessible. However, it does
 *             not make previous, expired data (older than the stream's previous retention period)
 *             accessible after the operation has been called. For example, if a stream's retention
 *             period is set to 24 hours and is increased to 168 hours, any data that is older than 24
 *             hours remains inaccessible to consumer applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, IncreaseStreamRetentionPeriodCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, IncreaseStreamRetentionPeriodCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new IncreaseStreamRetentionPeriodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IncreaseStreamRetentionPeriodCommandInput} for command's `input` shape.
 * @see {@link IncreaseStreamRetentionPeriodCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class IncreaseStreamRetentionPeriodCommand extends $Command<IncreaseStreamRetentionPeriodCommandInput, IncreaseStreamRetentionPeriodCommandOutput, KinesisClientResolvedConfig> {
    readonly input: IncreaseStreamRetentionPeriodCommandInput;
    constructor(input: IncreaseStreamRetentionPeriodCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<IncreaseStreamRetentionPeriodCommandInput, IncreaseStreamRetentionPeriodCommandOutput>;
    private serialize;
    private deserialize;
}
