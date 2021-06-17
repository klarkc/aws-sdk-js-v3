import { __extends } from "tslib";
import { ListForecastsRequest, ListForecastsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListForecastsCommand, serializeAws_json1_1ListForecastsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of forecasts created using the <a>CreateForecast</a> operation.
 *       For each forecast, this operation returns a summary of its properties, including its Amazon
 *       Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the
 *         <a>DescribeForecast</a> operation. You can filter the list using an array of
 *         <a>Filter</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListForecastsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListForecastsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListForecastsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListForecastsCommandInput} for command's `input` shape.
 * @see {@link ListForecastsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListForecastsCommand = /** @class */ (function (_super) {
    __extends(ListForecastsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListForecastsCommand(input) {
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
    ListForecastsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "ListForecastsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListForecastsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListForecastsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListForecastsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListForecastsCommand(input, context);
    };
    ListForecastsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListForecastsCommand(output, context);
    };
    return ListForecastsCommand;
}($Command));
export { ListForecastsCommand };
//# sourceMappingURL=ListForecastsCommand.js.map