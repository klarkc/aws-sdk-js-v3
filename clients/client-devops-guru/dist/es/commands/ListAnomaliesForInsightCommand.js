import { __extends } from "tslib";
import { ListAnomaliesForInsightRequest, ListAnomaliesForInsightResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAnomaliesForInsightCommand, serializeAws_restJson1ListAnomaliesForInsightCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    		Returns a list of the anomalies that belong to an insight that you specify using its ID.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListAnomaliesForInsightCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListAnomaliesForInsightCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new ListAnomaliesForInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnomaliesForInsightCommandInput} for command's `input` shape.
 * @see {@link ListAnomaliesForInsightCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAnomaliesForInsightCommand = /** @class */ (function (_super) {
    __extends(ListAnomaliesForInsightCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAnomaliesForInsightCommand(input) {
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
    ListAnomaliesForInsightCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "ListAnomaliesForInsightCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAnomaliesForInsightRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAnomaliesForInsightResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAnomaliesForInsightCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAnomaliesForInsightCommand(input, context);
    };
    ListAnomaliesForInsightCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAnomaliesForInsightCommand(output, context);
    };
    return ListAnomaliesForInsightCommand;
}($Command));
export { ListAnomaliesForInsightCommand };
//# sourceMappingURL=ListAnomaliesForInsightCommand.js.map