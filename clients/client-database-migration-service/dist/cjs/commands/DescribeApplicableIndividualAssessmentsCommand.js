"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeApplicableIndividualAssessmentsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Provides a list of individual assessments that you can specify for a new premigration
 *          assessment run, given one or more parameters.</p>
 *          <p>If you specify an existing migration task, this operation provides the default individual
 *          assessments you can specify for that task. Otherwise, the specified parameters model elements
 *          of a possible migration task on which to base a premigration assessment run.</p>
 *          <p>To use these migration task modeling parameters, you must specify an existing replication instance,
 *          a source database engine, a target database engine, and a migration type. This combination of
 *          parameters potentially limits the default individual assessments available for an assessment run
 *          created for a corresponding migration task.</p>
 *          <p>If you specify no parameters, this operation provides a list of all possible individual assessments
 *          that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must
 *          specify all of them or the operation cannot provide a list of individual assessments.
 *          The only parameter that you can specify alone is for an existing migration task. The specified task
 *          definition then determines the default list of individual assessments that you can specify in an
 *          assessment run for the task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeApplicableIndividualAssessmentsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeApplicableIndividualAssessmentsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeApplicableIndividualAssessmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicableIndividualAssessmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicableIndividualAssessmentsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeApplicableIndividualAssessmentsCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DatabaseMigrationServiceClient";
        const commandName = "DescribeApplicableIndividualAssessmentsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeApplicableIndividualAssessmentsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeApplicableIndividualAssessmentsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand(output, context);
    }
}
exports.DescribeApplicableIndividualAssessmentsCommand = DescribeApplicableIndividualAssessmentsCommand;
//# sourceMappingURL=DescribeApplicableIndividualAssessmentsCommand.js.map