import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationTasksMessage, DescribeReplicationTasksResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReplicationTasksCommandInput extends DescribeReplicationTasksMessage {
}
export interface DescribeReplicationTasksCommandOutput extends DescribeReplicationTasksResponse, __MetadataBearer {
}
/**
 * <p>Returns information about replication tasks for your account in the current
 *          region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTasksCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTasksCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeReplicationTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTasksCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReplicationTasksCommand extends $Command<DescribeReplicationTasksCommandInput, DescribeReplicationTasksCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeReplicationTasksCommandInput;
    constructor(input: DescribeReplicationTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReplicationTasksCommandInput, DescribeReplicationTasksCommandOutput>;
    private serialize;
    private deserialize;
}
