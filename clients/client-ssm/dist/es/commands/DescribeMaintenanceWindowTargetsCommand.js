import { __extends } from "tslib";
import { DescribeMaintenanceWindowTargetsRequest, DescribeMaintenanceWindowTargetsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommand, serializeAws_json1_1DescribeMaintenanceWindowTargetsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the targets registered with the maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowTargetsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowTargetsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeMaintenanceWindowTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMaintenanceWindowTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowTargetsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMaintenanceWindowTargetsCommand = /** @class */ (function (_super) {
    __extends(DescribeMaintenanceWindowTargetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMaintenanceWindowTargetsCommand(input) {
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
    DescribeMaintenanceWindowTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeMaintenanceWindowTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMaintenanceWindowTargetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMaintenanceWindowTargetsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMaintenanceWindowTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMaintenanceWindowTargetsCommand(input, context);
    };
    DescribeMaintenanceWindowTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommand(output, context);
    };
    return DescribeMaintenanceWindowTargetsCommand;
}($Command));
export { DescribeMaintenanceWindowTargetsCommand };
//# sourceMappingURL=DescribeMaintenanceWindowTargetsCommand.js.map