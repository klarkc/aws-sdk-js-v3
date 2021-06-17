import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { RebootReplicationInstanceMessage, RebootReplicationInstanceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RebootReplicationInstanceCommandInput extends RebootReplicationInstanceMessage {
}
export interface RebootReplicationInstanceCommandOutput extends RebootReplicationInstanceResponse, __MetadataBearer {
}
/**
 * <p>Reboots a replication instance. Rebooting results in a momentary outage, until the
 *          replication instance becomes available again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, RebootReplicationInstanceCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, RebootReplicationInstanceCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new RebootReplicationInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootReplicationInstanceCommandInput} for command's `input` shape.
 * @see {@link RebootReplicationInstanceCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RebootReplicationInstanceCommand extends $Command<RebootReplicationInstanceCommandInput, RebootReplicationInstanceCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: RebootReplicationInstanceCommandInput;
    constructor(input: RebootReplicationInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootReplicationInstanceCommandInput, RebootReplicationInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
