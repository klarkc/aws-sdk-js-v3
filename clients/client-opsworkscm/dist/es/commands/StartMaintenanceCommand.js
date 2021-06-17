import { __extends } from "tslib";
import { StartMaintenanceRequest, StartMaintenanceResponse } from "../models/models_0";
import { deserializeAws_json1_1StartMaintenanceCommand, serializeAws_json1_1StartMaintenanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Manually starts server maintenance. This command can be useful if an earlier maintenance attempt failed, and the underlying
 *       cause of maintenance failure has been resolved. The server is in an <code>UNDER_MAINTENANCE</code> state while maintenance is in progress.
 *     </p>
 *          <p>
 *       Maintenance can only be started on servers in <code>HEALTHY</code> and <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is thrown.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, StartMaintenanceCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, StartMaintenanceCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new StartMaintenanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMaintenanceCommandInput} for command's `input` shape.
 * @see {@link StartMaintenanceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartMaintenanceCommand = /** @class */ (function (_super) {
    __extends(StartMaintenanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartMaintenanceCommand(input) {
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
    StartMaintenanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksCMClient";
        var commandName = "StartMaintenanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartMaintenanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartMaintenanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartMaintenanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartMaintenanceCommand(input, context);
    };
    StartMaintenanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartMaintenanceCommand(output, context);
    };
    return StartMaintenanceCommand;
}($Command));
export { StartMaintenanceCommand };
//# sourceMappingURL=StartMaintenanceCommand.js.map