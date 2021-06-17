import { __extends } from "tslib";
import { ListPredictorsRequest, ListPredictorsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListPredictorsCommand, serializeAws_json1_1ListPredictorsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of predictors created using the <a>CreatePredictor</a>
 *       operation. For each predictor, this operation returns a summary of its properties, including
 *       its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the
 *       ARN with the <a>DescribePredictor</a> operation. You can filter the list using an
 *       array of <a>Filter</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListPredictorsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListPredictorsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListPredictorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPredictorsCommandInput} for command's `input` shape.
 * @see {@link ListPredictorsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPredictorsCommand = /** @class */ (function (_super) {
    __extends(ListPredictorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPredictorsCommand(input) {
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
    ListPredictorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "ListPredictorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPredictorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPredictorsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPredictorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPredictorsCommand(input, context);
    };
    ListPredictorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPredictorsCommand(output, context);
    };
    return ListPredictorsCommand;
}($Command));
export { ListPredictorsCommand };
//# sourceMappingURL=ListPredictorsCommand.js.map