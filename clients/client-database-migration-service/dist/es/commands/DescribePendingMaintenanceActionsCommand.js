import { __extends } from "tslib";
import { DescribePendingMaintenanceActionsMessage, DescribePendingMaintenanceActionsResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribePendingMaintenanceActionsCommand, serializeAws_json1_1DescribePendingMaintenanceActionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>For internal use only</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribePendingMaintenanceActionsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribePendingMaintenanceActionsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribePendingMaintenanceActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePendingMaintenanceActionsCommandInput} for command's `input` shape.
 * @see {@link DescribePendingMaintenanceActionsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePendingMaintenanceActionsCommand = /** @class */ (function (_super) {
    __extends(DescribePendingMaintenanceActionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePendingMaintenanceActionsCommand(input) {
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
    DescribePendingMaintenanceActionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribePendingMaintenanceActionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePendingMaintenanceActionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePendingMaintenanceActionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePendingMaintenanceActionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePendingMaintenanceActionsCommand(input, context);
    };
    DescribePendingMaintenanceActionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePendingMaintenanceActionsCommand(output, context);
    };
    return DescribePendingMaintenanceActionsCommand;
}($Command));
export { DescribePendingMaintenanceActionsCommand };
//# sourceMappingURL=DescribePendingMaintenanceActionsCommand.js.map