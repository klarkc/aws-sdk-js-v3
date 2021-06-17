import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { ReloadTablesMessage, ReloadTablesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ReloadTablesCommandInput extends ReloadTablesMessage {
}
export interface ReloadTablesCommandOutput extends ReloadTablesResponse, __MetadataBearer {
}
/**
 * <p>Reloads the target database table with the source data. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ReloadTablesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ReloadTablesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new ReloadTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReloadTablesCommandInput} for command's `input` shape.
 * @see {@link ReloadTablesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ReloadTablesCommand extends $Command<ReloadTablesCommandInput, ReloadTablesCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: ReloadTablesCommandInput;
    constructor(input: ReloadTablesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReloadTablesCommandInput, ReloadTablesCommandOutput>;
    private serialize;
    private deserialize;
}
