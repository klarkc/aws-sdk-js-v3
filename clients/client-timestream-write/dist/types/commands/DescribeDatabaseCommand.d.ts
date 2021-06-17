import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";
import { DescribeDatabaseRequest, DescribeDatabaseResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDatabaseCommandInput extends DescribeDatabaseRequest {
}
export interface DescribeDatabaseCommandOutput extends DescribeDatabaseResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the database, including the database name, time that the database was created,
 *          and the total number of tables found within the database.
 *          Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, DescribeDatabaseCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, DescribeDatabaseCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new DescribeDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDatabaseCommandInput} for command's `input` shape.
 * @see {@link DescribeDatabaseCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDatabaseCommand extends $Command<DescribeDatabaseCommandInput, DescribeDatabaseCommandOutput, TimestreamWriteClientResolvedConfig> {
    readonly input: DescribeDatabaseCommandInput;
    constructor(input: DescribeDatabaseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TimestreamWriteClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDatabaseCommandInput, DescribeDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
