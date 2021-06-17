import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ImportMigrationTaskRequest, ImportMigrationTaskResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportMigrationTaskCommandInput extends ImportMigrationTaskRequest {
}
export interface ImportMigrationTaskCommandOutput extends ImportMigrationTaskResult, __MetadataBearer {
}
/**
 * <p>Registers a new migration task which represents a server, database, etc., being migrated
 *          to AWS by a migration tool.</p>
 *          <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as
 *          the migration tool must first register the migration task with Migration Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ImportMigrationTaskCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ImportMigrationTaskCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ImportMigrationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportMigrationTaskCommandInput} for command's `input` shape.
 * @see {@link ImportMigrationTaskCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportMigrationTaskCommand extends $Command<ImportMigrationTaskCommandInput, ImportMigrationTaskCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: ImportMigrationTaskCommandInput;
    constructor(input: ImportMigrationTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportMigrationTaskCommandInput, ImportMigrationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
