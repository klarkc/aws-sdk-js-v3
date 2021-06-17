import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationInstancesMessage, DescribeReplicationInstancesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReplicationInstancesCommandInput extends DescribeReplicationInstancesMessage {
}
export interface DescribeReplicationInstancesCommandOutput extends DescribeReplicationInstancesResponse, __MetadataBearer {
}
/**
 * <p>Returns information about replication instances for your account in the current
 *          region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationInstancesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationInstancesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeReplicationInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationInstancesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReplicationInstancesCommand extends $Command<DescribeReplicationInstancesCommandInput, DescribeReplicationInstancesCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeReplicationInstancesCommandInput;
    constructor(input: DescribeReplicationInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReplicationInstancesCommandInput, DescribeReplicationInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
