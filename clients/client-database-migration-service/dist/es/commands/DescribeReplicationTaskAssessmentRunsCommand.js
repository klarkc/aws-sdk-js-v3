import { __extends } from "tslib";
import { DescribeReplicationTaskAssessmentRunsMessage, DescribeReplicationTaskAssessmentRunsResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand, serializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a paginated list of premigration assessment runs based on filter
 *          settings.</p>
 *          <p>These filter settings can specify a combination of premigration assessment runs,
 *          migration tasks, replication instances, and assessment run status values.</p>
 *          <note>
 *             <p>This operation doesn't return information about individual assessments. For this
 *             information, see the <code>DescribeReplicationTaskIndividualAssessments</code>
 *             operation. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTaskAssessmentRunsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTaskAssessmentRunsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeReplicationTaskAssessmentRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationTaskAssessmentRunsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTaskAssessmentRunsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReplicationTaskAssessmentRunsCommand = /** @class */ (function (_super) {
    __extends(DescribeReplicationTaskAssessmentRunsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReplicationTaskAssessmentRunsCommand(input) {
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
    DescribeReplicationTaskAssessmentRunsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeReplicationTaskAssessmentRunsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReplicationTaskAssessmentRunsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReplicationTaskAssessmentRunsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReplicationTaskAssessmentRunsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand(input, context);
    };
    DescribeReplicationTaskAssessmentRunsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand(output, context);
    };
    return DescribeReplicationTaskAssessmentRunsCommand;
}($Command));
export { DescribeReplicationTaskAssessmentRunsCommand };
//# sourceMappingURL=DescribeReplicationTaskAssessmentRunsCommand.js.map