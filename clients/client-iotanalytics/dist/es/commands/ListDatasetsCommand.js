import { __extends } from "tslib";
import { ListDatasetsRequest, ListDatasetsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDatasetsCommand, serializeAws_restJson1ListDatasetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about data sets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, ListDatasetsCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, ListDatasetsCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new ListDatasetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetsCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDatasetsCommand = /** @class */ (function (_super) {
    __extends(ListDatasetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDatasetsCommand(input) {
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
    ListDatasetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "ListDatasetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDatasetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDatasetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDatasetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDatasetsCommand(input, context);
    };
    ListDatasetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDatasetsCommand(output, context);
    };
    return ListDatasetsCommand;
}($Command));
export { ListDatasetsCommand };
//# sourceMappingURL=ListDatasetsCommand.js.map