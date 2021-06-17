import { __extends } from "tslib";
import { GetCurrentMetricDataRequest, GetCurrentMetricDataResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCurrentMetricDataCommand, serializeAws_restJson1GetCurrentMetricDataCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the real-time metric data from the specified Amazon Connect instance.</p>
 *          <p>For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics
 *     Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetCurrentMetricDataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetCurrentMetricDataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new GetCurrentMetricDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCurrentMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetCurrentMetricDataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCurrentMetricDataCommand = /** @class */ (function (_super) {
    __extends(GetCurrentMetricDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCurrentMetricDataCommand(input) {
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
    GetCurrentMetricDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "GetCurrentMetricDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCurrentMetricDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCurrentMetricDataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCurrentMetricDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCurrentMetricDataCommand(input, context);
    };
    GetCurrentMetricDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCurrentMetricDataCommand(output, context);
    };
    return GetCurrentMetricDataCommand;
}($Command));
export { GetCurrentMetricDataCommand };
//# sourceMappingURL=GetCurrentMetricDataCommand.js.map