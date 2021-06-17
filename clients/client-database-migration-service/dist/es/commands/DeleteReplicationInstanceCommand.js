import { __extends } from "tslib";
import { DeleteReplicationInstanceMessage, DeleteReplicationInstanceResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteReplicationInstanceCommand, serializeAws_json1_1DeleteReplicationInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified replication instance.</p>
 *          <note>
 *             <p>You must delete any migration tasks that are associated with the replication instance
 *             before you can delete it.</p>
 *          </note>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteReplicationInstanceCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteReplicationInstanceCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DeleteReplicationInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReplicationInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationInstanceCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteReplicationInstanceCommand = /** @class */ (function (_super) {
    __extends(DeleteReplicationInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteReplicationInstanceCommand(input) {
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
    DeleteReplicationInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DeleteReplicationInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteReplicationInstanceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteReplicationInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteReplicationInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteReplicationInstanceCommand(input, context);
    };
    DeleteReplicationInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteReplicationInstanceCommand(output, context);
    };
    return DeleteReplicationInstanceCommand;
}($Command));
export { DeleteReplicationInstanceCommand };
//# sourceMappingURL=DeleteReplicationInstanceCommand.js.map