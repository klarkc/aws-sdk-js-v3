import { __extends } from "tslib";
import { CancelMaintenanceWindowExecutionRequest, CancelMaintenanceWindowExecutionResult } from "../models/models_0";
import { deserializeAws_json1_1CancelMaintenanceWindowExecutionCommand, serializeAws_json1_1CancelMaintenanceWindowExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a maintenance window execution that is already in progress and cancels any tasks in
 *    the window that have not already starting running. (Tasks already in progress will continue to
 *    completion.)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CancelMaintenanceWindowExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CancelMaintenanceWindowExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CancelMaintenanceWindowExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelMaintenanceWindowExecutionCommandInput} for command's `input` shape.
 * @see {@link CancelMaintenanceWindowExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelMaintenanceWindowExecutionCommand = /** @class */ (function (_super) {
    __extends(CancelMaintenanceWindowExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelMaintenanceWindowExecutionCommand(input) {
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
    CancelMaintenanceWindowExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CancelMaintenanceWindowExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelMaintenanceWindowExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelMaintenanceWindowExecutionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelMaintenanceWindowExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelMaintenanceWindowExecutionCommand(input, context);
    };
    CancelMaintenanceWindowExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelMaintenanceWindowExecutionCommand(output, context);
    };
    return CancelMaintenanceWindowExecutionCommand;
}($Command));
export { CancelMaintenanceWindowExecutionCommand };
//# sourceMappingURL=CancelMaintenanceWindowExecutionCommand.js.map