import { __extends } from "tslib";
import { ModifyReplicationTaskMessage, ModifyReplicationTaskResponse } from "../models/models_0";
import { deserializeAws_json1_1ModifyReplicationTaskCommand, serializeAws_json1_1ModifyReplicationTaskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the specified replication task.</p>
 *          <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p>
 *          <p>For more information about AWS DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the
 *             <i>AWS Database Migration Service User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyReplicationTaskCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyReplicationTaskCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new ModifyReplicationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyReplicationTaskCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationTaskCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyReplicationTaskCommand = /** @class */ (function (_super) {
    __extends(ModifyReplicationTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyReplicationTaskCommand(input) {
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
    ModifyReplicationTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "ModifyReplicationTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyReplicationTaskMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyReplicationTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyReplicationTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyReplicationTaskCommand(input, context);
    };
    ModifyReplicationTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyReplicationTaskCommand(output, context);
    };
    return ModifyReplicationTaskCommand;
}($Command));
export { ModifyReplicationTaskCommand };
//# sourceMappingURL=ModifyReplicationTaskCommand.js.map