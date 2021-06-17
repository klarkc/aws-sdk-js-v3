import { __extends } from "tslib";
import { ModifyClusterMaintenanceMessage, ModifyClusterMaintenanceResult } from "../models/models_1";
import { deserializeAws_queryModifyClusterMaintenanceCommand, serializeAws_queryModifyClusterMaintenanceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the maintenance settings of a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterMaintenanceCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterMaintenanceCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterMaintenanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterMaintenanceCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterMaintenanceCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyClusterMaintenanceCommand = /** @class */ (function (_super) {
    __extends(ModifyClusterMaintenanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyClusterMaintenanceCommand(input) {
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
    ModifyClusterMaintenanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ModifyClusterMaintenanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyClusterMaintenanceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyClusterMaintenanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyClusterMaintenanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyClusterMaintenanceCommand(input, context);
    };
    ModifyClusterMaintenanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyClusterMaintenanceCommand(output, context);
    };
    return ModifyClusterMaintenanceCommand;
}($Command));
export { ModifyClusterMaintenanceCommand };
//# sourceMappingURL=ModifyClusterMaintenanceCommand.js.map