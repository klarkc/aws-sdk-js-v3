import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";
import { CreateTableRequest, CreateTableResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTableCommandInput extends CreateTableRequest {
}
export interface CreateTableCommandOutput extends CreateTableResponse, __MetadataBearer {
}
/**
 * <p>The CreateTable operation adds a new table to an existing database in your account. In an AWS account,
 *       table names must be at least unique within each Region if they are in the same database.
 *       You may have identical table names in the same Region if the tables are in seperate databases.
 *          While creating the table, you must specify the table name, database name,
 *          and the retention properties.
 *          Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a>
 *          in the Timestream Developer Guide.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, CreateTableCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, CreateTableCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new CreateTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTableCommandInput} for command's `input` shape.
 * @see {@link CreateTableCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTableCommand extends $Command<CreateTableCommandInput, CreateTableCommandOutput, TimestreamWriteClientResolvedConfig> {
    readonly input: CreateTableCommandInput;
    constructor(input: CreateTableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TimestreamWriteClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTableCommandInput, CreateTableCommandOutput>;
    private serialize;
    private deserialize;
}
