import { __extends } from "tslib";
import { CancelReplicationTaskAssessmentRunMessage, CancelReplicationTaskAssessmentRunResponse, } from "../models/models_0";
import { deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommand, serializeAws_json1_1CancelReplicationTaskAssessmentRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CancelReplicationTaskAssessmentRunCommand = /** @class */ (function (_super) {
    __extends(CancelReplicationTaskAssessmentRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelReplicationTaskAssessmentRunCommand(input) {
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
    CancelReplicationTaskAssessmentRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "CancelReplicationTaskAssessmentRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelReplicationTaskAssessmentRunMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CancelReplicationTaskAssessmentRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelReplicationTaskAssessmentRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelReplicationTaskAssessmentRunCommand(input, context);
    };
    CancelReplicationTaskAssessmentRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommand(output, context);
    };
    return CancelReplicationTaskAssessmentRunCommand;
}($Command));
export { CancelReplicationTaskAssessmentRunCommand };
//# sourceMappingURL=CancelReplicationTaskAssessmentRunCommand.js.map