import { __extends } from "tslib";
import { StartAvailabilityMonitorTestInput, StartAvailabilityMonitorTestOutput } from "../models/models_0";
import { deserializeAws_json1_1StartAvailabilityMonitorTestCommand, serializeAws_json1_1StartAvailabilityMonitorTestCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Start a test that verifies that the specified gateway is configured for High
 *          Availability monitoring in your host environment. This request only initiates the test and
 *          that a successful response only indicates that the test was started. It doesn't
 *          indicate that the test passed. For the status of the test, invoke the
 *             <code>DescribeAvailabilityMonitorTest</code> API.</p>
 *          <note>
 *             <p>Starting this test will cause your gateway to go offline for a brief period.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, StartAvailabilityMonitorTestCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, StartAvailabilityMonitorTestCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new StartAvailabilityMonitorTestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAvailabilityMonitorTestCommandInput} for command's `input` shape.
 * @see {@link StartAvailabilityMonitorTestCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartAvailabilityMonitorTestCommand = /** @class */ (function (_super) {
    __extends(StartAvailabilityMonitorTestCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartAvailabilityMonitorTestCommand(input) {
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
    StartAvailabilityMonitorTestCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "StartAvailabilityMonitorTestCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartAvailabilityMonitorTestInput.filterSensitiveLog,
            outputFilterSensitiveLog: StartAvailabilityMonitorTestOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartAvailabilityMonitorTestCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartAvailabilityMonitorTestCommand(input, context);
    };
    StartAvailabilityMonitorTestCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartAvailabilityMonitorTestCommand(output, context);
    };
    return StartAvailabilityMonitorTestCommand;
}($Command));
export { StartAvailabilityMonitorTestCommand };
//# sourceMappingURL=StartAvailabilityMonitorTestCommand.js.map