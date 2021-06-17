import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeOrderableReplicationInstancesMessage, DescribeOrderableReplicationInstancesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeOrderableReplicationInstancesCommandInput extends DescribeOrderableReplicationInstancesMessage {
}
export interface DescribeOrderableReplicationInstancesCommandOutput extends DescribeOrderableReplicationInstancesResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the replication instance types that can be created in the
 *          specified region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeOrderableReplicationInstancesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeOrderableReplicationInstancesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeOrderableReplicationInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrderableReplicationInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrderableReplicationInstancesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeOrderableReplicationInstancesCommand extends $Command<DescribeOrderableReplicationInstancesCommandInput, DescribeOrderableReplicationInstancesCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeOrderableReplicationInstancesCommandInput;
    constructor(input: DescribeOrderableReplicationInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrderableReplicationInstancesCommandInput, DescribeOrderableReplicationInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
