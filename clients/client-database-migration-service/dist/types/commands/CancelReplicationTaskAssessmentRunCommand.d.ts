import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { CancelReplicationTaskAssessmentRunMessage, CancelReplicationTaskAssessmentRunResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelReplicationTaskAssessmentRunCommandInput extends CancelReplicationTaskAssessmentRunMessage {
}
export interface CancelReplicationTaskAssessmentRunCommandOutput extends CancelReplicationTaskAssessmentRunResponse, __MetadataBearer {
}
/**
 * <p>Cancels a single premigration assessment run.</p>
 *          <p>This operation prevents any individual assessments from running if they haven't started
 *          running. It also attempts to cancel any individual assessments that are currently
 *          running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CancelReplicationTaskAssessmentRunCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CancelReplicationTaskAssessmentRunCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new CancelReplicationTaskAssessmentRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelReplicationTaskAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link CancelReplicationTaskAssessmentRunCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelReplicationTaskAssessmentRunCommand extends $Command<CancelReplicationTaskAssessmentRunCommandInput, CancelReplicationTaskAssessmentRunCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: CancelReplicationTaskAssessmentRunCommandInput;
    constructor(input: CancelReplicationTaskAssessmentRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelReplicationTaskAssessmentRunCommandInput, CancelReplicationTaskAssessmentRunCommandOutput>;
    private serialize;
    private deserialize;
}
