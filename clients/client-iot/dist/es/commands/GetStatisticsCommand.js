import { __extends } from "tslib";
import { GetStatisticsRequest, GetStatisticsResponse } from "../models/models_1";
import { deserializeAws_restJson1GetStatisticsCommand, serializeAws_restJson1GetStatisticsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the count, average, sum, minimum, maximum, sum of squares, variance,
 *       and standard deviation for the specified aggregated field. If the aggregation field is of type
 *       <code>String</code>, only the count statistic is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetStatisticsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetStatisticsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetStatisticsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStatisticsCommand = /** @class */ (function (_super) {
    __extends(GetStatisticsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetStatisticsCommand(input) {
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
    GetStatisticsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "GetStatisticsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetStatisticsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetStatisticsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetStatisticsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetStatisticsCommand(input, context);
    };
    GetStatisticsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetStatisticsCommand(output, context);
    };
    return GetStatisticsCommand;
}($Command));
export { GetStatisticsCommand };
//# sourceMappingURL=GetStatisticsCommand.js.map