import { __extends } from "tslib";
import { ListSamplesRequest, ListSamplesResult } from "../models/models_0";
import { deserializeAws_json1_1ListSamplesCommand, serializeAws_json1_1ListSamplesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about samples, given an AWS Device Farm job ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListSamplesCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListSamplesCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListSamplesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSamplesCommandInput} for command's `input` shape.
 * @see {@link ListSamplesCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSamplesCommand = /** @class */ (function (_super) {
    __extends(ListSamplesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSamplesCommand(input) {
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
    ListSamplesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListSamplesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSamplesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSamplesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSamplesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListSamplesCommand(input, context);
    };
    ListSamplesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListSamplesCommand(output, context);
    };
    return ListSamplesCommand;
}($Command));
export { ListSamplesCommand };
//# sourceMappingURL=ListSamplesCommand.js.map