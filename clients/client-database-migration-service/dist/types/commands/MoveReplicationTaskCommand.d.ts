import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { MoveReplicationTaskMessage, MoveReplicationTaskResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface MoveReplicationTaskCommandInput extends MoveReplicationTaskMessage {
}
export interface MoveReplicationTaskCommandOutput extends MoveReplicationTaskResponse, __MetadataBearer {
}
/**
 * <p>Moves a replication task from its current replication instance to a different target
 *          replication instance using the specified parameters. The target replication instance must
 *          be created with the same or later AWS DMS version as the current replication
 *          instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, MoveReplicationTaskCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, MoveReplicationTaskCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new MoveReplicationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MoveReplicationTaskCommandInput} for command's `input` shape.
 * @see {@link MoveReplicationTaskCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class MoveReplicationTaskCommand extends $Command<MoveReplicationTaskCommandInput, MoveReplicationTaskCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: MoveReplicationTaskCommandInput;
    constructor(input: MoveReplicationTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MoveReplicationTaskCommandInput, MoveReplicationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
