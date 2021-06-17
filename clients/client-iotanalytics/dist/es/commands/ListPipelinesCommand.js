import { __extends } from "tslib";
import { ListPipelinesRequest, ListPipelinesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListPipelinesCommand, serializeAws_restJson1ListPipelinesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of pipelines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, ListPipelinesCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, ListPipelinesCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new ListPipelinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipelinesCommandInput} for command's `input` shape.
 * @see {@link ListPipelinesCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPipelinesCommand = /** @class */ (function (_super) {
    __extends(ListPipelinesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPipelinesCommand(input) {
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
    ListPipelinesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "ListPipelinesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPipelinesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPipelinesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPipelinesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPipelinesCommand(input, context);
    };
    ListPipelinesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPipelinesCommand(output, context);
    };
    return ListPipelinesCommand;
}($Command));
export { ListPipelinesCommand };
//# sourceMappingURL=ListPipelinesCommand.js.map