import { __extends } from "tslib";
import { ListRunsRequest, ListRunsResult } from "../models/models_0";
import { deserializeAws_json1_1ListRunsCommand, serializeAws_json1_1ListRunsCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about runs, given an AWS Device Farm project ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListRunsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListRunsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRunsCommandInput} for command's `input` shape.
 * @see {@link ListRunsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRunsCommand = /** @class */ (function (_super) {
    __extends(ListRunsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRunsCommand(input) {
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
    ListRunsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListRunsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRunsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRunsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRunsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRunsCommand(input, context);
    };
    ListRunsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRunsCommand(output, context);
    };
    return ListRunsCommand;
}($Command));
export { ListRunsCommand };
//# sourceMappingURL=ListRunsCommand.js.map