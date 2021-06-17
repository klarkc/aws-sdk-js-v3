import { __extends } from "tslib";
import { DescribeMaintenanceWindowExecutionTasksRequest, DescribeMaintenanceWindowExecutionTasksResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand, serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>For a given maintenance window execution, lists the tasks that were run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowExecutionTasksCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowExecutionTasksCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeMaintenanceWindowExecutionTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMaintenanceWindowExecutionTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowExecutionTasksCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMaintenanceWindowExecutionTasksCommand = /** @class */ (function (_super) {
    __extends(DescribeMaintenanceWindowExecutionTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMaintenanceWindowExecutionTasksCommand(input) {
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
    DescribeMaintenanceWindowExecutionTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeMaintenanceWindowExecutionTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMaintenanceWindowExecutionTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMaintenanceWindowExecutionTasksResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMaintenanceWindowExecutionTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand(input, context);
    };
    DescribeMaintenanceWindowExecutionTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand(output, context);
    };
    return DescribeMaintenanceWindowExecutionTasksCommand;
}($Command));
export { DescribeMaintenanceWindowExecutionTasksCommand };
//# sourceMappingURL=DescribeMaintenanceWindowExecutionTasksCommand.js.map