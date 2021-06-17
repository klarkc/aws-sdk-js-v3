import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { StopReplicationTaskMessage, StopReplicationTaskResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopReplicationTaskCommandInput extends StopReplicationTaskMessage {
}
export interface StopReplicationTaskCommandOutput extends StopReplicationTaskResponse, __MetadataBearer {
}
/**
 * <p>Stops the replication task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StopReplicationTaskCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StopReplicationTaskCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new StopReplicationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopReplicationTaskCommandInput} for command's `input` shape.
 * @see {@link StopReplicationTaskCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopReplicationTaskCommand extends $Command<StopReplicationTaskCommandInput, StopReplicationTaskCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: StopReplicationTaskCommandInput;
    constructor(input: StopReplicationTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopReplicationTaskCommandInput, StopReplicationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
