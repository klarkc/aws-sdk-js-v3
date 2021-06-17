import { __extends } from "tslib";
import { ListListenersRequest, ListListenersResponse } from "../models/models_0";
import { deserializeAws_json1_1ListListenersCommand, serializeAws_json1_1ListListenersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the listeners for an accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListListenersCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListListenersCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListListenersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListListenersCommandInput} for command's `input` shape.
 * @see {@link ListListenersCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListListenersCommand = /** @class */ (function (_super) {
    __extends(ListListenersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListListenersCommand(input) {
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
    ListListenersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "ListListenersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListListenersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListListenersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListListenersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListListenersCommand(input, context);
    };
    ListListenersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListListenersCommand(output, context);
    };
    return ListListenersCommand;
}($Command));
export { ListListenersCommand };
//# sourceMappingURL=ListListenersCommand.js.map