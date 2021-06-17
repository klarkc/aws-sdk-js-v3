import { __extends } from "tslib";
import { DeleteDatasetContentRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteDatasetContentCommand, serializeAws_restJson1DeleteDatasetContentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the content of the specified dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DeleteDatasetContentCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DeleteDatasetContentCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new DeleteDatasetContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatasetContentCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetContentCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDatasetContentCommand = /** @class */ (function (_super) {
    __extends(DeleteDatasetContentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDatasetContentCommand(input) {
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
    DeleteDatasetContentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "DeleteDatasetContentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDatasetContentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDatasetContentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDatasetContentCommand(input, context);
    };
    DeleteDatasetContentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDatasetContentCommand(output, context);
    };
    return DeleteDatasetContentCommand;
}($Command));
export { DeleteDatasetContentCommand };
//# sourceMappingURL=DeleteDatasetContentCommand.js.map