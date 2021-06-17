import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";
import { WriteRecordsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface WriteRecordsCommandInput extends WriteRecordsRequest {
}
export interface WriteRecordsCommandOutput extends __MetadataBearer {
}
/**
 * <p>The WriteRecords operation enables you to write your time series
 *       data into Timestream. You can specify a single data point or a batch
 *       of data points to be inserted into the system. Timestream offers you
 *       with a flexible schema that auto detects the column names and data types
 *       for your Timestream tables based on the dimension names and data types of
 *       the data points you specify when invoking writes into the database.
 *       Timestream support eventual consistency read semantics. This means that
 *       when you query data immediately after writing a batch of data into Timestream,
 *       the query results might not reflect the results of a recently completed write
 *       operation. The results may also include some stale data. If you repeat the
 *       query request after a short time, the results should return the latest data.
 *       Service quotas apply. For more information,
 *       see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, WriteRecordsCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, WriteRecordsCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new WriteRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link WriteRecordsCommandInput} for command's `input` shape.
 * @see {@link WriteRecordsCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class WriteRecordsCommand extends $Command<WriteRecordsCommandInput, WriteRecordsCommandOutput, TimestreamWriteClientResolvedConfig> {
    readonly input: WriteRecordsCommandInput;
    constructor(input: WriteRecordsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TimestreamWriteClientResolvedConfig, options?: __HttpHandlerOptions): Handler<WriteRecordsCommandInput, WriteRecordsCommandOutput>;
    private serialize;
    private deserialize;
}
