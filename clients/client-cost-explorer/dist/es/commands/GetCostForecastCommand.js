import { __extends } from "tslib";
import { GetCostForecastRequest, GetCostForecastResponse } from "../models/models_0";
import { deserializeAws_json1_1GetCostForecastCommand, serializeAws_json1_1GetCostForecastCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetCostForecastCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetCostForecastCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetCostForecastCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCostForecastCommandInput} for command's `input` shape.
 * @see {@link GetCostForecastCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCostForecastCommand = /** @class */ (function (_super) {
    __extends(GetCostForecastCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCostForecastCommand(input) {
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
    GetCostForecastCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "GetCostForecastCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCostForecastRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCostForecastResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCostForecastCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCostForecastCommand(input, context);
    };
    GetCostForecastCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCostForecastCommand(output, context);
    };
    return GetCostForecastCommand;
}($Command));
export { GetCostForecastCommand };
//# sourceMappingURL=GetCostForecastCommand.js.map