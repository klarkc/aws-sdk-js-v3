import { __extends } from "tslib";
import { ModifyReplicationSubnetGroupMessage, ModifyReplicationSubnetGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1ModifyReplicationSubnetGroupCommand, serializeAws_json1_1ModifyReplicationSubnetGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the settings for the specified replication subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyReplicationSubnetGroupCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyReplicationSubnetGroupCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new ModifyReplicationSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyReplicationSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyReplicationSubnetGroupCommand = /** @class */ (function (_super) {
    __extends(ModifyReplicationSubnetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyReplicationSubnetGroupCommand(input) {
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
    ModifyReplicationSubnetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "ModifyReplicationSubnetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyReplicationSubnetGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyReplicationSubnetGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyReplicationSubnetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyReplicationSubnetGroupCommand(input, context);
    };
    ModifyReplicationSubnetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyReplicationSubnetGroupCommand(output, context);
    };
    return ModifyReplicationSubnetGroupCommand;
}($Command));
export { ModifyReplicationSubnetGroupCommand };
//# sourceMappingURL=ModifyReplicationSubnetGroupCommand.js.map