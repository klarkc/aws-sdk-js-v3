import { __extends } from "tslib";
import { DescribeReplicationTaskIndividualAssessmentsMessage, DescribeReplicationTaskIndividualAssessmentsResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand, serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DescribeReplicationTaskIndividualAssessmentsCommand = /** @class */ (function (_super) {
    __extends(DescribeReplicationTaskIndividualAssessmentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReplicationTaskIndividualAssessmentsCommand(input) {
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
    DescribeReplicationTaskIndividualAssessmentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeReplicationTaskIndividualAssessmentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReplicationTaskIndividualAssessmentsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReplicationTaskIndividualAssessmentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReplicationTaskIndividualAssessmentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand(input, context);
    };
    DescribeReplicationTaskIndividualAssessmentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand(output, context);
    };
    return DescribeReplicationTaskIndividualAssessmentsCommand;
}($Command));
export { DescribeReplicationTaskIndividualAssessmentsCommand };
//# sourceMappingURL=DescribeReplicationTaskIndividualAssessmentsCommand.js.map