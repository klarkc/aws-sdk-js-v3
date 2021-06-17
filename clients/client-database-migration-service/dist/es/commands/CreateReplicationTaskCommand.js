import { __extends } from "tslib";
import { CreateReplicationTaskMessage, CreateReplicationTaskResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateReplicationTaskCommand, serializeAws_json1_1CreateReplicationTaskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a replication task using the specified parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateReplicationTaskCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateReplicationTaskCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new CreateReplicationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationTaskCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationTaskCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateReplicationTaskCommand = /** @class */ (function (_super) {
    __extends(CreateReplicationTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateReplicationTaskCommand(input) {
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
    CreateReplicationTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "CreateReplicationTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateReplicationTaskMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateReplicationTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateReplicationTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateReplicationTaskCommand(input, context);
    };
    CreateReplicationTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateReplicationTaskCommand(output, context);
    };
    return CreateReplicationTaskCommand;
}($Command));
export { CreateReplicationTaskCommand };
//# sourceMappingURL=CreateReplicationTaskCommand.js.map