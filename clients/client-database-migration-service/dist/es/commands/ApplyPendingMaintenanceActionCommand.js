import { __extends } from "tslib";
import { ApplyPendingMaintenanceActionMessage, ApplyPendingMaintenanceActionResponse } from "../models/models_0";
import { deserializeAws_json1_1ApplyPendingMaintenanceActionCommand, serializeAws_json1_1ApplyPendingMaintenanceActionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Applies a pending maintenance action to a resource (for example, to a replication instance).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ApplyPendingMaintenanceActionCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ApplyPendingMaintenanceActionCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new ApplyPendingMaintenanceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApplyPendingMaintenanceActionCommandInput} for command's `input` shape.
 * @see {@link ApplyPendingMaintenanceActionCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ApplyPendingMaintenanceActionCommand = /** @class */ (function (_super) {
    __extends(ApplyPendingMaintenanceActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ApplyPendingMaintenanceActionCommand(input) {
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
    ApplyPendingMaintenanceActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "ApplyPendingMaintenanceActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ApplyPendingMaintenanceActionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ApplyPendingMaintenanceActionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ApplyPendingMaintenanceActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ApplyPendingMaintenanceActionCommand(input, context);
    };
    ApplyPendingMaintenanceActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ApplyPendingMaintenanceActionCommand(output, context);
    };
    return ApplyPendingMaintenanceActionCommand;
}($Command));
export { ApplyPendingMaintenanceActionCommand };
//# sourceMappingURL=ApplyPendingMaintenanceActionCommand.js.map