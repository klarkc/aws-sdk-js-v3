import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationTaskIndividualAssessmentsMessage, DescribeReplicationTaskIndividualAssessmentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReplicationTaskIndividualAssessmentsCommandInput extends DescribeReplicationTaskIndividualAssessmentsMessage {
}
export interface DescribeReplicationTaskIndividualAssessmentsCommandOutput extends DescribeReplicationTaskIndividualAssessmentsResponse, __MetadataBearer {
}
/**
 * <p>Returns a paginated list of individual assessments based on filter settings.</p>
 *          <p>These filter settings can specify a combination of premigration assessment runs,
 *          migration tasks, and assessment status values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTaskIndividualAssessmentsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTaskIndividualAssessmentsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeReplicationTaskIndividualAssessmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationTaskIndividualAssessmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTaskIndividualAssessmentsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReplicationTaskIndividualAssessmentsCommand extends $Command<DescribeReplicationTaskIndividualAssessmentsCommandInput, DescribeReplicationTaskIndividualAssessmentsCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeReplicationTaskIndividualAssessmentsCommandInput;
    constructor(input: DescribeReplicationTaskIndividualAssessmentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReplicationTaskIndividualAssessmentsCommandInput, DescribeReplicationTaskIndividualAssessmentsCommandOutput>;
    private serialize;
    private deserialize;
}
