import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DeleteReplicationInstanceMessage, DeleteReplicationInstanceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteReplicationInstanceCommandInput extends DeleteReplicationInstanceMessage {
}
export interface DeleteReplicationInstanceCommandOutput extends DeleteReplicationInstanceResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified replication instance.</p>
 *          <note>
 *             <p>You must delete any migration tasks that are associated with the replication instance
 *             before you can delete it.</p>
 *          </note>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteReplicationInstanceCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteReplicationInstanceCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DeleteReplicationInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReplicationInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationInstanceCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteReplicationInstanceCommand extends $Command<DeleteReplicationInstanceCommandInput, DeleteReplicationInstanceCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DeleteReplicationInstanceCommandInput;
    constructor(input: DeleteReplicationInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReplicationInstanceCommandInput, DeleteReplicationInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
