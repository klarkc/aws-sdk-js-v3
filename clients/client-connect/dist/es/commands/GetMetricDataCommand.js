import { __extends } from "tslib";
import { GetMetricDataRequest, GetMetricDataResponse } from "../models/models_0";
import { deserializeAws_restJson1GetMetricDataCommand, serializeAws_restJson1GetMetricDataCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets historical metric data from the specified Amazon Connect instance.</p>
 *
 *          <p>For a description of each historical metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics
 *     Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetMetricDataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetMetricDataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new GetMetricDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetMetricDataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMetricDataCommand = /** @class */ (function (_super) {
    __extends(GetMetricDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMetricDataCommand(input) {
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
    GetMetricDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "GetMetricDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMetricDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMetricDataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMetricDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMetricDataCommand(input, context);
    };
    GetMetricDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMetricDataCommand(output, context);
    };
    return GetMetricDataCommand;
}($Command));
export { GetMetricDataCommand };
//# sourceMappingURL=GetMetricDataCommand.js.map