import { __extends } from "tslib";
import { DeleteReplicationTaskMessage, DeleteReplicationTaskResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteReplicationTaskCommand, serializeAws_json1_1DeleteReplicationTaskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified replication task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteReplicationTaskCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteReplicationTaskCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DeleteReplicationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReplicationTaskCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationTaskCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteReplicationTaskCommand = /** @class */ (function (_super) {
    __extends(DeleteReplicationTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteReplicationTaskCommand(input) {
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
    DeleteReplicationTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DeleteReplicationTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteReplicationTaskMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteReplicationTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteReplicationTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteReplicationTaskCommand(input, context);
    };
    DeleteReplicationTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteReplicationTaskCommand(output, context);
    };
    return DeleteReplicationTaskCommand;
}($Command));
export { DeleteReplicationTaskCommand };
//# sourceMappingURL=DeleteReplicationTaskCommand.js.map