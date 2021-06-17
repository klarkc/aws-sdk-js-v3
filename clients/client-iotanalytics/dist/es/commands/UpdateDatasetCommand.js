import { __extends } from "tslib";
import { UpdateDatasetRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateDatasetCommand, serializeAws_restJson1UpdateDatasetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the settings of a data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, UpdateDatasetCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, UpdateDatasetCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new UpdateDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatasetCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDatasetCommand = /** @class */ (function (_super) {
    __extends(UpdateDatasetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDatasetCommand(input) {
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
    UpdateDatasetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "UpdateDatasetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDatasetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDatasetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDatasetCommand(input, context);
    };
    UpdateDatasetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDatasetCommand(output, context);
    };
    return UpdateDatasetCommand;
}($Command));
export { UpdateDatasetCommand };
//# sourceMappingURL=UpdateDatasetCommand.js.map