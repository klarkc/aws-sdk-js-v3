import { __extends } from "tslib";
import { DescribeAvailabilityMonitorTestInput, DescribeAvailabilityMonitorTestOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand, serializeAws_json1_1DescribeAvailabilityMonitorTestCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the most recent high availability monitoring test that was
 *          performed on the host in a cluster. If a test isn't performed, the status and start
 *          time in the response would be null.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeAvailabilityMonitorTestCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeAvailabilityMonitorTestCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeAvailabilityMonitorTestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAvailabilityMonitorTestCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailabilityMonitorTestCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAvailabilityMonitorTestCommand = /** @class */ (function (_super) {
    __extends(DescribeAvailabilityMonitorTestCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAvailabilityMonitorTestCommand(input) {
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
    DescribeAvailabilityMonitorTestCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeAvailabilityMonitorTestCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAvailabilityMonitorTestInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAvailabilityMonitorTestOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAvailabilityMonitorTestCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAvailabilityMonitorTestCommand(input, context);
    };
    DescribeAvailabilityMonitorTestCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand(output, context);
    };
    return DescribeAvailabilityMonitorTestCommand;
}($Command));
export { DescribeAvailabilityMonitorTestCommand };
//# sourceMappingURL=DescribeAvailabilityMonitorTestCommand.js.map