import { __extends } from "tslib";
import { StartReplicationTaskAssessmentRunMessage, StartReplicationTaskAssessmentRunResponse, } from "../models/models_0";
import { deserializeAws_json1_1StartReplicationTaskAssessmentRunCommand, serializeAws_json1_1StartReplicationTaskAssessmentRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a new premigration assessment run for one or more individual assessments
 *          of a migration task.</p>
 *          <p>The assessments that you can specify depend on the source and target database engine and
 *          the migration type defined for the given task. To run this operation, your migration task
 *          must already be created. After you run this operation, you can review the status of each
 *          individual assessment. You can also run the migration task manually after the assessment
 *          run and its individual assessments complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartReplicationTaskAssessmentRunCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartReplicationTaskAssessmentRunCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new StartReplicationTaskAssessmentRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartReplicationTaskAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link StartReplicationTaskAssessmentRunCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartReplicationTaskAssessmentRunCommand = /** @class */ (function (_super) {
    __extends(StartReplicationTaskAssessmentRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartReplicationTaskAssessmentRunCommand(input) {
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
    StartReplicationTaskAssessmentRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "StartReplicationTaskAssessmentRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartReplicationTaskAssessmentRunMessage.filterSensitiveLog,
            outputFilterSensitiveLog: StartReplicationTaskAssessmentRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartReplicationTaskAssessmentRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartReplicationTaskAssessmentRunCommand(input, context);
    };
    StartReplicationTaskAssessmentRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartReplicationTaskAssessmentRunCommand(output, context);
    };
    return StartReplicationTaskAssessmentRunCommand;
}($Command));
export { StartReplicationTaskAssessmentRunCommand };
//# sourceMappingURL=StartReplicationTaskAssessmentRunCommand.js.map