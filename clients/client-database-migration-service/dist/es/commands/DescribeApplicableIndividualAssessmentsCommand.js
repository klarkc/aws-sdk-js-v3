import { __extends } from "tslib";
import { DescribeApplicableIndividualAssessmentsMessage, DescribeApplicableIndividualAssessmentsResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand, serializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DescribeApplicableIndividualAssessmentsCommand = /** @class */ (function (_super) {
    __extends(DescribeApplicableIndividualAssessmentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeApplicableIndividualAssessmentsCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DescribeApplicableIndividualAssessmentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeApplicableIndividualAssessmentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeApplicableIndividualAssessmentsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeApplicableIndividualAssessmentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeApplicableIndividualAssessmentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand(input, context);
    };
    DescribeApplicableIndividualAssessmentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand(output, context);
    };
    return DescribeApplicableIndividualAssessmentsCommand;
}($Command));
export { DescribeApplicableIndividualAssessmentsCommand };
//# sourceMappingURL=DescribeApplicableIndividualAssessmentsCommand.js.map