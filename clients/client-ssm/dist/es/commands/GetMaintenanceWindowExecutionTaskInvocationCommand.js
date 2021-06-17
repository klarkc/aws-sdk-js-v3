import { __extends } from "tslib";
import { GetMaintenanceWindowExecutionTaskInvocationRequest, GetMaintenanceWindowExecutionTaskInvocationResult, } from "../models/models_1";
import { deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand, serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a specific task running on a specific target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetMaintenanceWindowExecutionTaskInvocationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetMaintenanceWindowExecutionTaskInvocationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetMaintenanceWindowExecutionTaskInvocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMaintenanceWindowExecutionTaskInvocationCommandInput} for command's `input` shape.
 * @see {@link GetMaintenanceWindowExecutionTaskInvocationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMaintenanceWindowExecutionTaskInvocationCommand = /** @class */ (function (_super) {
    __extends(GetMaintenanceWindowExecutionTaskInvocationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMaintenanceWindowExecutionTaskInvocationCommand(input) {
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
    GetMaintenanceWindowExecutionTaskInvocationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetMaintenanceWindowExecutionTaskInvocationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMaintenanceWindowExecutionTaskInvocationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMaintenanceWindowExecutionTaskInvocationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMaintenanceWindowExecutionTaskInvocationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand(input, context);
    };
    GetMaintenanceWindowExecutionTaskInvocationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand(output, context);
    };
    return GetMaintenanceWindowExecutionTaskInvocationCommand;
}($Command));
export { GetMaintenanceWindowExecutionTaskInvocationCommand };
//# sourceMappingURL=GetMaintenanceWindowExecutionTaskInvocationCommand.js.map