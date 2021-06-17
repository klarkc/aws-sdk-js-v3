import { __extends } from "tslib";
import { ListTestGridProjectsRequest, ListTestGridProjectsResult } from "../models/models_0";
import { deserializeAws_json1_1ListTestGridProjectsCommand, serializeAws_json1_1ListTestGridProjectsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of all Selenium testing projects in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridProjectsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestGridProjectsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListTestGridProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTestGridProjectsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridProjectsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTestGridProjectsCommand = /** @class */ (function (_super) {
    __extends(ListTestGridProjectsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTestGridProjectsCommand(input) {
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
    ListTestGridProjectsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListTestGridProjectsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTestGridProjectsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTestGridProjectsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTestGridProjectsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTestGridProjectsCommand(input, context);
    };
    ListTestGridProjectsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTestGridProjectsCommand(output, context);
    };
    return ListTestGridProjectsCommand;
}($Command));
export { ListTestGridProjectsCommand };
//# sourceMappingURL=ListTestGridProjectsCommand.js.map