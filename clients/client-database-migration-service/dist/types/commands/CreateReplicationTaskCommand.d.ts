import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { CreateReplicationTaskMessage, CreateReplicationTaskResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateReplicationTaskCommandInput extends CreateReplicationTaskMessage {
}
export interface CreateReplicationTaskCommandOutput extends CreateReplicationTaskResponse, __MetadataBearer {
}
/**
 * <p>Creates a replication task using the specified parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateReplicationTaskCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateReplicationTaskCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new CreateReplicationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationTaskCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationTaskCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateReplicationTaskCommand extends $Command<CreateReplicationTaskCommandInput, CreateReplicationTaskCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: CreateReplicationTaskCommandInput;
    constructor(input: CreateReplicationTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReplicationTaskCommandInput, CreateReplicationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
