import { __extends } from "tslib";
import { RegisterTargetWithMaintenanceWindowRequest, RegisterTargetWithMaintenanceWindowResult, } from "../models/models_1";
import { deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand, serializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers a target with a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterTargetWithMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterTargetWithMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new RegisterTargetWithMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterTargetWithMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link RegisterTargetWithMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterTargetWithMaintenanceWindowCommand = /** @class */ (function (_super) {
    __extends(RegisterTargetWithMaintenanceWindowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterTargetWithMaintenanceWindowCommand(input) {
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
    RegisterTargetWithMaintenanceWindowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "RegisterTargetWithMaintenanceWindowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterTargetWithMaintenanceWindowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterTargetWithMaintenanceWindowResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterTargetWithMaintenanceWindowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand(input, context);
    };
    RegisterTargetWithMaintenanceWindowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand(output, context);
    };
    return RegisterTargetWithMaintenanceWindowCommand;
}($Command));
export { RegisterTargetWithMaintenanceWindowCommand };
//# sourceMappingURL=RegisterTargetWithMaintenanceWindowCommand.js.map