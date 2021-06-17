import { __extends } from "tslib";
import { AddNotificationChannelsRequest, AddNotificationChannelsResponse } from "../models/models_0";
import { deserializeAws_restJson1AddNotificationChannelsCommand, serializeAws_restJson1AddNotificationChannelsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Add up to 2 anomaly notifications channels for a profiling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, AddNotificationChannelsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, AddNotificationChannelsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new AddNotificationChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddNotificationChannelsCommandInput} for command's `input` shape.
 * @see {@link AddNotificationChannelsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddNotificationChannelsCommand = /** @class */ (function (_super) {
    __extends(AddNotificationChannelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddNotificationChannelsCommand(input) {
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
    AddNotificationChannelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "AddNotificationChannelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddNotificationChannelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddNotificationChannelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddNotificationChannelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AddNotificationChannelsCommand(input, context);
    };
    AddNotificationChannelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AddNotificationChannelsCommand(output, context);
    };
    return AddNotificationChannelsCommand;
}($Command));
export { AddNotificationChannelsCommand };
//# sourceMappingURL=AddNotificationChannelsCommand.js.map