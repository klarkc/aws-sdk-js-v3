import { __extends } from "tslib";
import { DeleteReplicationTaskAssessmentRunMessage, DeleteReplicationTaskAssessmentRunResponse, } from "../models/models_0";
import { deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand, serializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the record of a single premigration assessment run.</p>
 *          <p>This operation removes all metadata that AWS DMS maintains about this assessment run.
 *          However, the operation leaves untouched all information about this assessment run that is
 *          stored in your Amazon S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteReplicationTaskAssessmentRunCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteReplicationTaskAssessmentRunCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DeleteReplicationTaskAssessmentRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReplicationTaskAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationTaskAssessmentRunCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteReplicationTaskAssessmentRunCommand = /** @class */ (function (_super) {
    __extends(DeleteReplicationTaskAssessmentRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteReplicationTaskAssessmentRunCommand(input) {
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
    DeleteReplicationTaskAssessmentRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DeleteReplicationTaskAssessmentRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteReplicationTaskAssessmentRunMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteReplicationTaskAssessmentRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteReplicationTaskAssessmentRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand(input, context);
    };
    DeleteReplicationTaskAssessmentRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand(output, context);
    };
    return DeleteReplicationTaskAssessmentRunCommand;
}($Command));
export { DeleteReplicationTaskAssessmentRunCommand };
//# sourceMappingURL=DeleteReplicationTaskAssessmentRunCommand.js.map