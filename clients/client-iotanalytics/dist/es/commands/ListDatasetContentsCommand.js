import { __extends } from "tslib";
import { ListDatasetContentsRequest, ListDatasetContentsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDatasetContentsCommand, serializeAws_restJson1ListDatasetContentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists information about data set contents that have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, ListDatasetContentsCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, ListDatasetContentsCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new ListDatasetContentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetContentsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetContentsCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDatasetContentsCommand = /** @class */ (function (_super) {
    __extends(ListDatasetContentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDatasetContentsCommand(input) {
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
    ListDatasetContentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "ListDatasetContentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDatasetContentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDatasetContentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDatasetContentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDatasetContentsCommand(input, context);
    };
    ListDatasetContentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDatasetContentsCommand(output, context);
    };
    return ListDatasetContentsCommand;
}($Command));
export { ListDatasetContentsCommand };
//# sourceMappingURL=ListDatasetContentsCommand.js.map