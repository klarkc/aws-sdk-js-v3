import { __extends } from "tslib";
import { ListTestGridSessionsRequest, ListTestGridSessionsResult } from "../models/models_0";
import { deserializeAws_json1_1ListTestGridSessionsCommand, serializeAws_json1_1ListTestGridSessionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of sessions for a <a>TestGridProject</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridSessionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestGridSessionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListTestGridSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTestGridSessionsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridSessionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTestGridSessionsCommand = /** @class */ (function (_super) {
    __extends(ListTestGridSessionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTestGridSessionsCommand(input) {
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
    ListTestGridSessionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListTestGridSessionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTestGridSessionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTestGridSessionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTestGridSessionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTestGridSessionsCommand(input, context);
    };
    ListTestGridSessionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTestGridSessionsCommand(output, context);
    };
    return ListTestGridSessionsCommand;
}($Command));
export { ListTestGridSessionsCommand };
//# sourceMappingURL=ListTestGridSessionsCommand.js.map