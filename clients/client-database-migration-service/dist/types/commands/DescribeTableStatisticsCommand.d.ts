import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeTableStatisticsMessage, DescribeTableStatisticsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTableStatisticsCommandInput extends DescribeTableStatisticsMessage {
}
export interface DescribeTableStatisticsCommandOutput extends DescribeTableStatisticsResponse, __MetadataBearer {
}
/**
 * <p>Returns table statistics on the database migration task, including table name, rows
 *          inserted, rows updated, and rows deleted.</p>
 *          <p>Note that the "last updated" column the DMS console only indicates the time that AWS DMS
 *          last updated the table statistics record for a table. It does not indicate the time of the
 *          last update to the table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeTableStatisticsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeTableStatisticsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeTableStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTableStatisticsCommandInput} for command's `input` shape.
 * @see {@link DescribeTableStatisticsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTableStatisticsCommand extends $Command<DescribeTableStatisticsCommandInput, DescribeTableStatisticsCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeTableStatisticsCommandInput;
    constructor(input: DescribeTableStatisticsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTableStatisticsCommandInput, DescribeTableStatisticsCommandOutput>;
    private serialize;
    private deserialize;
}
