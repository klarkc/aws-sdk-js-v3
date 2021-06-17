import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { ModifyReplicationTaskMessage, ModifyReplicationTaskResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyReplicationTaskCommandInput extends ModifyReplicationTaskMessage {
}
export interface ModifyReplicationTaskCommandOutput extends ModifyReplicationTaskResponse, __MetadataBearer {
}
/**
 * <p>Modifies the specified replication task.</p>
 *          <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p>
 *          <p>For more information about AWS DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the
 *             <i>AWS Database Migration Service User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyReplicationTaskCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyReplicationTaskCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new ModifyReplicationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyReplicationTaskCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationTaskCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyReplicationTaskCommand extends $Command<ModifyReplicationTaskCommandInput, ModifyReplicationTaskCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: ModifyReplicationTaskCommandInput;
    constructor(input: ModifyReplicationTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyReplicationTaskCommandInput, ModifyReplicationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
