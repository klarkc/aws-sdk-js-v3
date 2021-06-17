import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationTaskAssessmentResultsMessage, DescribeReplicationTaskAssessmentResultsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReplicationTaskAssessmentResultsCommandInput extends DescribeReplicationTaskAssessmentResultsMessage {
}
export interface DescribeReplicationTaskAssessmentResultsCommandOutput extends DescribeReplicationTaskAssessmentResultsResponse, __MetadataBearer {
}
/**
 * <p>Returns the task assessment results from Amazon S3. This action always returns the
 *          latest results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTaskAssessmentResultsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTaskAssessmentResultsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeReplicationTaskAssessmentResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationTaskAssessmentResultsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTaskAssessmentResultsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReplicationTaskAssessmentResultsCommand extends $Command<DescribeReplicationTaskAssessmentResultsCommandInput, DescribeReplicationTaskAssessmentResultsCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeReplicationTaskAssessmentResultsCommandInput;
    constructor(input: DescribeReplicationTaskAssessmentResultsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReplicationTaskAssessmentResultsCommandInput, DescribeReplicationTaskAssessmentResultsCommandOutput>;
    private serialize;
    private deserialize;
}
