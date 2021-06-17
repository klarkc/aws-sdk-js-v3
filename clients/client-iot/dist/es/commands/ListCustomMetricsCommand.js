import { __extends } from "tslib";
import { ListCustomMetricsRequest, ListCustomMetricsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListCustomMetricsCommand, serializeAws_restJson1ListCustomMetricsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Lists your Device Defender detect custom metrics.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListCustomMetricsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListCustomMetricsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListCustomMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomMetricsCommandInput} for command's `input` shape.
 * @see {@link ListCustomMetricsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCustomMetricsCommand = /** @class */ (function (_super) {
    __extends(ListCustomMetricsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCustomMetricsCommand(input) {
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
    ListCustomMetricsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListCustomMetricsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCustomMetricsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCustomMetricsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCustomMetricsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListCustomMetricsCommand(input, context);
    };
    ListCustomMetricsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListCustomMetricsCommand(output, context);
    };
    return ListCustomMetricsCommand;
}($Command));
export { ListCustomMetricsCommand };
//# sourceMappingURL=ListCustomMetricsCommand.js.map