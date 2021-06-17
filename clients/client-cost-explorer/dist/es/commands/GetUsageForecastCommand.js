import { __extends } from "tslib";
import { GetUsageForecastRequest, GetUsageForecastResponse } from "../models/models_0";
import { deserializeAws_json1_1GetUsageForecastCommand, serializeAws_json1_1GetUsageForecastCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetUsageForecastCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetUsageForecastCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetUsageForecastCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsageForecastCommandInput} for command's `input` shape.
 * @see {@link GetUsageForecastCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUsageForecastCommand = /** @class */ (function (_super) {
    __extends(GetUsageForecastCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetUsageForecastCommand(input) {
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
    GetUsageForecastCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "GetUsageForecastCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetUsageForecastRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetUsageForecastResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetUsageForecastCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetUsageForecastCommand(input, context);
    };
    GetUsageForecastCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetUsageForecastCommand(output, context);
    };
    return GetUsageForecastCommand;
}($Command));
export { GetUsageForecastCommand };
//# sourceMappingURL=GetUsageForecastCommand.js.map