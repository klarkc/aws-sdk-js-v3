import { __extends } from "tslib";
import { ListRemoteAccessSessionsRequest, ListRemoteAccessSessionsResult } from "../models/models_0";
import { deserializeAws_json1_1ListRemoteAccessSessionsCommand, serializeAws_json1_1ListRemoteAccessSessionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all currently running remote access sessions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListRemoteAccessSessionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListRemoteAccessSessionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListRemoteAccessSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRemoteAccessSessionsCommandInput} for command's `input` shape.
 * @see {@link ListRemoteAccessSessionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRemoteAccessSessionsCommand = /** @class */ (function (_super) {
    __extends(ListRemoteAccessSessionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRemoteAccessSessionsCommand(input) {
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
    ListRemoteAccessSessionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListRemoteAccessSessionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRemoteAccessSessionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRemoteAccessSessionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRemoteAccessSessionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRemoteAccessSessionsCommand(input, context);
    };
    ListRemoteAccessSessionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRemoteAccessSessionsCommand(output, context);
    };
    return ListRemoteAccessSessionsCommand;
}($Command));
export { ListRemoteAccessSessionsCommand };
//# sourceMappingURL=ListRemoteAccessSessionsCommand.js.map