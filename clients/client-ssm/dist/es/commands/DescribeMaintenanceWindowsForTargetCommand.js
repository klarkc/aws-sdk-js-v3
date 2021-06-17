import { __extends } from "tslib";
import { DescribeMaintenanceWindowsForTargetRequest, DescribeMaintenanceWindowsForTargetResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand, serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the maintenance window targets or tasks that an instance is
 *    associated with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowsForTargetCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowsForTargetCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeMaintenanceWindowsForTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMaintenanceWindowsForTargetCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowsForTargetCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMaintenanceWindowsForTargetCommand = /** @class */ (function (_super) {
    __extends(DescribeMaintenanceWindowsForTargetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMaintenanceWindowsForTargetCommand(input) {
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
    DescribeMaintenanceWindowsForTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeMaintenanceWindowsForTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMaintenanceWindowsForTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMaintenanceWindowsForTargetResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMaintenanceWindowsForTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand(input, context);
    };
    DescribeMaintenanceWindowsForTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand(output, context);
    };
    return DescribeMaintenanceWindowsForTargetCommand;
}($Command));
export { DescribeMaintenanceWindowsForTargetCommand };
//# sourceMappingURL=DescribeMaintenanceWindowsForTargetCommand.js.map