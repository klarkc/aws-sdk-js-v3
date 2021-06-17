import { __extends } from "tslib";
import { ModifyReplicationInstanceMessage, ModifyReplicationInstanceResponse } from "../models/models_0";
import { deserializeAws_json1_1ModifyReplicationInstanceCommand, serializeAws_json1_1ModifyReplicationInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the replication instance to apply new settings. You can change one or more
 *          parameters by specifying these parameters and the new values in the request.</p>
 *          <p>Some settings are applied during the maintenance window.</p>
 *
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyReplicationInstanceCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyReplicationInstanceCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new ModifyReplicationInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyReplicationInstanceCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationInstanceCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyReplicationInstanceCommand = /** @class */ (function (_super) {
    __extends(ModifyReplicationInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyReplicationInstanceCommand(input) {
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
    ModifyReplicationInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "ModifyReplicationInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyReplicationInstanceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyReplicationInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyReplicationInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyReplicationInstanceCommand(input, context);
    };
    ModifyReplicationInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyReplicationInstanceCommand(output, context);
    };
    return ModifyReplicationInstanceCommand;
}($Command));
export { ModifyReplicationInstanceCommand };
//# sourceMappingURL=ModifyReplicationInstanceCommand.js.map