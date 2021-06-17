import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DeleteReplicationSubnetGroupMessage, DeleteReplicationSubnetGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteReplicationSubnetGroupCommandInput extends DeleteReplicationSubnetGroupMessage {
}
export interface DeleteReplicationSubnetGroupCommandOutput extends DeleteReplicationSubnetGroupResponse, __MetadataBearer {
}
/**
 * <p>Deletes a subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteReplicationSubnetGroupCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteReplicationSubnetGroupCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DeleteReplicationSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReplicationSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteReplicationSubnetGroupCommand extends $Command<DeleteReplicationSubnetGroupCommandInput, DeleteReplicationSubnetGroupCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DeleteReplicationSubnetGroupCommandInput;
    constructor(input: DeleteReplicationSubnetGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReplicationSubnetGroupCommandInput, DeleteReplicationSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
