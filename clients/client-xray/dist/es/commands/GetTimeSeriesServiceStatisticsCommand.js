import { __extends } from "tslib";
import { GetTimeSeriesServiceStatisticsRequest, GetTimeSeriesServiceStatisticsResult } from "../models/models_0";
import { deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand, serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get an aggregation of service statistics defined by a specific time
 *             range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetTimeSeriesServiceStatisticsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetTimeSeriesServiceStatisticsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetTimeSeriesServiceStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTimeSeriesServiceStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetTimeSeriesServiceStatisticsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTimeSeriesServiceStatisticsCommand = /** @class */ (function (_super) {
    __extends(GetTimeSeriesServiceStatisticsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTimeSeriesServiceStatisticsCommand(input) {
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
    GetTimeSeriesServiceStatisticsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "GetTimeSeriesServiceStatisticsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTimeSeriesServiceStatisticsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTimeSeriesServiceStatisticsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTimeSeriesServiceStatisticsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand(input, context);
    };
    GetTimeSeriesServiceStatisticsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand(output, context);
    };
    return GetTimeSeriesServiceStatisticsCommand;
}($Command));
export { GetTimeSeriesServiceStatisticsCommand };
//# sourceMappingURL=GetTimeSeriesServiceStatisticsCommand.js.map