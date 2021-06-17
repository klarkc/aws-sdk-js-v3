import { __extends } from "tslib";
import { RegisterTaskWithMaintenanceWindowRequest, RegisterTaskWithMaintenanceWindowResult } from "../models/models_1";
import { deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand, serializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a new task to a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterTaskWithMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterTaskWithMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new RegisterTaskWithMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterTaskWithMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link RegisterTaskWithMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterTaskWithMaintenanceWindowCommand = /** @class */ (function (_super) {
    __extends(RegisterTaskWithMaintenanceWindowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterTaskWithMaintenanceWindowCommand(input) {
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
    RegisterTaskWithMaintenanceWindowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "RegisterTaskWithMaintenanceWindowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterTaskWithMaintenanceWindowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterTaskWithMaintenanceWindowResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterTaskWithMaintenanceWindowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand(input, context);
    };
    RegisterTaskWithMaintenanceWindowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand(output, context);
    };
    return RegisterTaskWithMaintenanceWindowCommand;
}($Command));
export { RegisterTaskWithMaintenanceWindowCommand };
//# sourceMappingURL=RegisterTaskWithMaintenanceWindowCommand.js.map