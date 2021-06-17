import { __extends } from "tslib";
import { StopReplicationTaskMessage, StopReplicationTaskResponse } from "../models/models_0";
import { deserializeAws_json1_1StopReplicationTaskCommand, serializeAws_json1_1StopReplicationTaskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops the replication task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StopReplicationTaskCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StopReplicationTaskCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new StopReplicationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopReplicationTaskCommandInput} for command's `input` shape.
 * @see {@link StopReplicationTaskCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopReplicationTaskCommand = /** @class */ (function (_super) {
    __extends(StopReplicationTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopReplicationTaskCommand(input) {
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
    StopReplicationTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "StopReplicationTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopReplicationTaskMessage.filterSensitiveLog,
            outputFilterSensitiveLog: StopReplicationTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopReplicationTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopReplicationTaskCommand(input, context);
    };
    StopReplicationTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopReplicationTaskCommand(output, context);
    };
    return StopReplicationTaskCommand;
}($Command));
export { StopReplicationTaskCommand };
//# sourceMappingURL=StopReplicationTaskCommand.js.map