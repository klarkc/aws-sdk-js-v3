import { __extends } from "tslib";
import { GetMaintenanceWindowExecutionTaskRequest, GetMaintenanceWindowExecutionTaskResult } from "../models/models_1";
import { deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand, serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the details about a specific task run as part of a maintenance window
 *    execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetMaintenanceWindowExecutionTaskCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetMaintenanceWindowExecutionTaskCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetMaintenanceWindowExecutionTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMaintenanceWindowExecutionTaskCommandInput} for command's `input` shape.
 * @see {@link GetMaintenanceWindowExecutionTaskCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMaintenanceWindowExecutionTaskCommand = /** @class */ (function (_super) {
    __extends(GetMaintenanceWindowExecutionTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMaintenanceWindowExecutionTaskCommand(input) {
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
    GetMaintenanceWindowExecutionTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetMaintenanceWindowExecutionTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMaintenanceWindowExecutionTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMaintenanceWindowExecutionTaskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMaintenanceWindowExecutionTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand(input, context);
    };
    GetMaintenanceWindowExecutionTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand(output, context);
    };
    return GetMaintenanceWindowExecutionTaskCommand;
}($Command));
export { GetMaintenanceWindowExecutionTaskCommand };
//# sourceMappingURL=GetMaintenanceWindowExecutionTaskCommand.js.map