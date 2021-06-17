import { __extends } from "tslib";
import { DeleteConnectionMessage, DeleteConnectionResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteConnectionCommand, serializeAws_json1_1DeleteConnectionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the connection between a replication instance and an endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteConnectionCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteConnectionCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DeleteConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConnectionCommand = /** @class */ (function (_super) {
    __extends(DeleteConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteConnectionCommand(input) {
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
    DeleteConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DeleteConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteConnectionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteConnectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteConnectionCommand(input, context);
    };
    DeleteConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteConnectionCommand(output, context);
    };
    return DeleteConnectionCommand;
}($Command));
export { DeleteConnectionCommand };
//# sourceMappingURL=DeleteConnectionCommand.js.map