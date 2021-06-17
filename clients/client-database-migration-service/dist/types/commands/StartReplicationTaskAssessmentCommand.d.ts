import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { StartReplicationTaskAssessmentMessage, StartReplicationTaskAssessmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartReplicationTaskAssessmentCommandInput extends StartReplicationTaskAssessmentMessage {
}
export interface StartReplicationTaskAssessmentCommandOutput extends StartReplicationTaskAssessmentResponse, __MetadataBearer {
}
/**
 * <p> Starts the replication task assessment for unsupported data types in the source
 *          database. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartReplicationTaskAssessmentCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartReplicationTaskAssessmentCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new StartReplicationTaskAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartReplicationTaskAssessmentCommandInput} for command's `input` shape.
 * @see {@link StartReplicationTaskAssessmentCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartReplicationTaskAssessmentCommand extends $Command<StartReplicationTaskAssessmentCommandInput, StartReplicationTaskAssessmentCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: StartReplicationTaskAssessmentCommandInput;
    constructor(input: StartReplicationTaskAssessmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartReplicationTaskAssessmentCommandInput, StartReplicationTaskAssessmentCommandOutput>;
    private serialize;
    private deserialize;
}
