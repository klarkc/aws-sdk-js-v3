import { __extends } from "tslib";
import { ListDatastoresRequest, ListDatastoresResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDatastoresCommand, serializeAws_restJson1ListDatastoresCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of data stores.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, ListDatastoresCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, ListDatastoresCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new ListDatastoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatastoresCommandInput} for command's `input` shape.
 * @see {@link ListDatastoresCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDatastoresCommand = /** @class */ (function (_super) {
    __extends(ListDatastoresCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDatastoresCommand(input) {
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
    ListDatastoresCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "ListDatastoresCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDatastoresRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDatastoresResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDatastoresCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDatastoresCommand(input, context);
    };
    ListDatastoresCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDatastoresCommand(output, context);
    };
    return ListDatastoresCommand;
}($Command));
export { ListDatastoresCommand };
//# sourceMappingURL=ListDatastoresCommand.js.map