import { __extends } from "tslib";
import { UpdateMaintenanceWindowTaskRequest, UpdateMaintenanceWindowTaskResult } from "../models/models_2";
import { deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand, serializeAws_json1_1UpdateMaintenanceWindowTaskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies a task assigned to a maintenance window. You can't change the task type, but you
 *    can change the following values:</p>
 *          <ul>
 *             <li>
 *                <p>TaskARN. For example, you can change a RUN_COMMAND task from AWS-RunPowerShellScript to
 *      AWS-RunShellScript.</p>
 *             </li>
 *             <li>
 *                <p>ServiceRoleArn</p>
 *             </li>
 *             <li>
 *                <p>TaskInvocationParameters</p>
 *             </li>
 *             <li>
 *                <p>Priority</p>
 *             </li>
 *             <li>
 *                <p>MaxConcurrency</p>
 *             </li>
 *             <li>
 *                <p>MaxErrors</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>One or more targets must be specified for maintenance window Run Command-type tasks.
 *     Depending on the task, targets are optional for other maintenance window task types (Automation,
 *     AWS Lambda, and AWS Step Functions). For more information about running tasks that do not
 *     specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering
 *      maintenance window tasks without targets</a> in the
 *     <i>AWS Systems Manager User Guide</i>.</p>
 *          </note>
 *          <p>If the value for a parameter in <code>UpdateMaintenanceWindowTask</code> is null, then the
 *    corresponding field is not modified. If you set <code>Replace</code> to true, then all fields
 *    required by the <a>RegisterTaskWithMaintenanceWindow</a> action are required for this
 *    request. Optional fields that aren't specified are set to null.</p>
 *          <important>
 *             <p>When you update a maintenance window task that has options specified in
 *      <code>TaskInvocationParameters</code>, you must provide again all the
 *      <code>TaskInvocationParameters</code> values that you want to retain. The values you do not
 *     specify again are removed. For example, suppose that when you registered a Run Command task, you
 *     specified <code>TaskInvocationParameters</code> values for <code>Comment</code>,
 *      <code>NotificationConfig</code>, and <code>OutputS3BucketName</code>. If you update the
 *     maintenance window task and specify only a different <code>OutputS3BucketName</code> value, the
 *     values for <code>Comment</code> and <code>NotificationConfig</code> are removed.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateMaintenanceWindowTaskCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateMaintenanceWindowTaskCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateMaintenanceWindowTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMaintenanceWindowTaskCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceWindowTaskCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMaintenanceWindowTaskCommand = /** @class */ (function (_super) {
    __extends(UpdateMaintenanceWindowTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMaintenanceWindowTaskCommand(input) {
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
    UpdateMaintenanceWindowTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateMaintenanceWindowTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMaintenanceWindowTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMaintenanceWindowTaskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMaintenanceWindowTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateMaintenanceWindowTaskCommand(input, context);
    };
    UpdateMaintenanceWindowTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand(output, context);
    };
    return UpdateMaintenanceWindowTaskCommand;
}($Command));
export { UpdateMaintenanceWindowTaskCommand };
//# sourceMappingURL=UpdateMaintenanceWindowTaskCommand.js.map