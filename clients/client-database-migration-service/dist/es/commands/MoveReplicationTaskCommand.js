import { __extends } from "tslib";
import { MoveReplicationTaskMessage, MoveReplicationTaskResponse } from "../models/models_0";
import { deserializeAws_json1_1MoveReplicationTaskCommand, serializeAws_json1_1MoveReplicationTaskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Moves a replication task from its current replication instance to a different target
 *          replication instance using the specified parameters. The target replication instance must
 *          be created with the same or later AWS DMS version as the current replication
 *          instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, MoveReplicationTaskCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, MoveReplicationTaskCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new MoveReplicationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MoveReplicationTaskCommandInput} for command's `input` shape.
 * @see {@link MoveReplicationTaskCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var MoveReplicationTaskCommand = /** @class */ (function (_super) {
    __extends(MoveReplicationTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function MoveReplicationTaskCommand(input) {
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
    MoveReplicationTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "MoveReplicationTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: MoveReplicationTaskMessage.filterSensitiveLog,
            outputFilterSensitiveLog: MoveReplicationTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    MoveReplicationTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1MoveReplicationTaskCommand(input, context);
    };
    MoveReplicationTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1MoveReplicationTaskCommand(output, context);
    };
    return MoveReplicationTaskCommand;
}($Command));
export { MoveReplicationTaskCommand };
//# sourceMappingURL=MoveReplicationTaskCommand.js.map