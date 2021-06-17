import { __extends } from "tslib";
import { DescribeMaintenanceStartTimeInput, DescribeMaintenanceStartTimeOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeMaintenanceStartTimeCommand, serializeAws_json1_1DescribeMaintenanceStartTimeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns your gateway's weekly maintenance start time including the day and time of
 *          the week. Note that values are in terms of the gateway's time zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeMaintenanceStartTimeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeMaintenanceStartTimeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMaintenanceStartTimeCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceStartTimeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMaintenanceStartTimeCommand = /** @class */ (function (_super) {
    __extends(DescribeMaintenanceStartTimeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMaintenanceStartTimeCommand(input) {
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
    DescribeMaintenanceStartTimeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeMaintenanceStartTimeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMaintenanceStartTimeInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMaintenanceStartTimeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMaintenanceStartTimeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMaintenanceStartTimeCommand(input, context);
    };
    DescribeMaintenanceStartTimeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMaintenanceStartTimeCommand(output, context);
    };
    return DescribeMaintenanceStartTimeCommand;
}($Command));
export { DescribeMaintenanceStartTimeCommand };
//# sourceMappingURL=DescribeMaintenanceStartTimeCommand.js.map