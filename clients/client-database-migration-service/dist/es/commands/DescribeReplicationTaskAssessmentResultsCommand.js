import { __extends } from "tslib";
import { DescribeReplicationTaskAssessmentResultsMessage, DescribeReplicationTaskAssessmentResultsResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand, serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DescribeReplicationTaskAssessmentResultsCommand = /** @class */ (function (_super) {
    __extends(DescribeReplicationTaskAssessmentResultsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReplicationTaskAssessmentResultsCommand(input) {
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
    DescribeReplicationTaskAssessmentResultsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeReplicationTaskAssessmentResultsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReplicationTaskAssessmentResultsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReplicationTaskAssessmentResultsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReplicationTaskAssessmentResultsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand(input, context);
    };
    DescribeReplicationTaskAssessmentResultsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand(output, context);
    };
    return DescribeReplicationTaskAssessmentResultsCommand;
}($Command));
export { DescribeReplicationTaskAssessmentResultsCommand };
//# sourceMappingURL=DescribeReplicationTaskAssessmentResultsCommand.js.map