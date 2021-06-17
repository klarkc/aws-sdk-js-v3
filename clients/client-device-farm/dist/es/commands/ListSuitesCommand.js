import { __extends } from "tslib";
import { ListSuitesRequest, ListSuitesResult } from "../models/models_0";
import { deserializeAws_json1_1ListSuitesCommand, serializeAws_json1_1ListSuitesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about test suites for a given job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListSuitesCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListSuitesCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListSuitesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSuitesCommandInput} for command's `input` shape.
 * @see {@link ListSuitesCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSuitesCommand = /** @class */ (function (_super) {
    __extends(ListSuitesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSuitesCommand(input) {
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
    ListSuitesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListSuitesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSuitesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSuitesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSuitesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListSuitesCommand(input, context);
    };
    ListSuitesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListSuitesCommand(output, context);
    };
    return ListSuitesCommand;
}($Command));
export { ListSuitesCommand };
//# sourceMappingURL=ListSuitesCommand.js.map