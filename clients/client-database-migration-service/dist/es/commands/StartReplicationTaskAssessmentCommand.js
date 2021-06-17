import { __extends } from "tslib";
import { StartReplicationTaskAssessmentMessage, StartReplicationTaskAssessmentResponse } from "../models/models_0";
import { deserializeAws_json1_1StartReplicationTaskAssessmentCommand, serializeAws_json1_1StartReplicationTaskAssessmentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Starts the replication task assessment for unsupported data types in the source
 *          database. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartReplicationTaskAssessmentCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartReplicationTaskAssessmentCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new StartReplicationTaskAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartReplicationTaskAssessmentCommandInput} for command's `input` shape.
 * @see {@link StartReplicationTaskAssessmentCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartReplicationTaskAssessmentCommand = /** @class */ (function (_super) {
    __extends(StartReplicationTaskAssessmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartReplicationTaskAssessmentCommand(input) {
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
    StartReplicationTaskAssessmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "StartReplicationTaskAssessmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartReplicationTaskAssessmentMessage.filterSensitiveLog,
            outputFilterSensitiveLog: StartReplicationTaskAssessmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartReplicationTaskAssessmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartReplicationTaskAssessmentCommand(input, context);
    };
    StartReplicationTaskAssessmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartReplicationTaskAssessmentCommand(output, context);
    };
    return StartReplicationTaskAssessmentCommand;
}($Command));
export { StartReplicationTaskAssessmentCommand };
//# sourceMappingURL=StartReplicationTaskAssessmentCommand.js.map