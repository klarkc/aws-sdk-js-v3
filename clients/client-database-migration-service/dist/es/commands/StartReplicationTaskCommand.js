import { __extends } from "tslib";
import { StartReplicationTaskMessage, StartReplicationTaskResponse } from "../models/models_0";
import { deserializeAws_json1_1StartReplicationTaskCommand, serializeAws_json1_1StartReplicationTaskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the replication task.</p>
 *          <p>For more information about AWS DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the
 *             <i>AWS Database Migration Service User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartReplicationTaskCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartReplicationTaskCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new StartReplicationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartReplicationTaskCommandInput} for command's `input` shape.
 * @see {@link StartReplicationTaskCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartReplicationTaskCommand = /** @class */ (function (_super) {
    __extends(StartReplicationTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartReplicationTaskCommand(input) {
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
    StartReplicationTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "StartReplicationTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartReplicationTaskMessage.filterSensitiveLog,
            outputFilterSensitiveLog: StartReplicationTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartReplicationTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartReplicationTaskCommand(input, context);
    };
    StartReplicationTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartReplicationTaskCommand(output, context);
    };
    return StartReplicationTaskCommand;
}($Command));
export { StartReplicationTaskCommand };
//# sourceMappingURL=StartReplicationTaskCommand.js.map