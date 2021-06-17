import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationInstanceTaskLogsMessage, DescribeReplicationInstanceTaskLogsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReplicationInstanceTaskLogsCommandInput extends DescribeReplicationInstanceTaskLogsMessage {
}
export interface DescribeReplicationInstanceTaskLogsCommandOutput extends DescribeReplicationInstanceTaskLogsResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the task logs for the specified task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationInstanceTaskLogsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationInstanceTaskLogsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeReplicationInstanceTaskLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationInstanceTaskLogsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationInstanceTaskLogsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReplicationInstanceTaskLogsCommand extends $Command<DescribeReplicationInstanceTaskLogsCommandInput, DescribeReplicationInstanceTaskLogsCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeReplicationInstanceTaskLogsCommandInput;
    constructor(input: DescribeReplicationInstanceTaskLogsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReplicationInstanceTaskLogsCommandInput, DescribeReplicationInstanceTaskLogsCommandOutput>;
    private serialize;
    private deserialize;
}
