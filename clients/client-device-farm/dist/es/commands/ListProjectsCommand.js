import { __extends } from "tslib";
import { ListProjectsRequest, ListProjectsResult } from "../models/models_0";
import { deserializeAws_json1_1ListProjectsCommand, serializeAws_json1_1ListProjectsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListProjectsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListProjectsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProjectsCommandInput} for command's `input` shape.
 * @see {@link ListProjectsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProjectsCommand = /** @class */ (function (_super) {
    __extends(ListProjectsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProjectsCommand(input) {
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
    ListProjectsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListProjectsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProjectsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProjectsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProjectsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListProjectsCommand(input, context);
    };
    ListProjectsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListProjectsCommand(output, context);
    };
    return ListProjectsCommand;
}($Command));
export { ListProjectsCommand };
//# sourceMappingURL=ListProjectsCommand.js.map