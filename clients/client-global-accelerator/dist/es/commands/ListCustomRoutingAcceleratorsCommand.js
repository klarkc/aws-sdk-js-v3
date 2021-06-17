import { __extends } from "tslib";
import { ListCustomRoutingAcceleratorsRequest, ListCustomRoutingAcceleratorsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListCustomRoutingAcceleratorsCommand, serializeAws_json1_1ListCustomRoutingAcceleratorsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the custom routing accelerators for an AWS account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingAcceleratorsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingAcceleratorsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListCustomRoutingAcceleratorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomRoutingAcceleratorsCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingAcceleratorsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCustomRoutingAcceleratorsCommand = /** @class */ (function (_super) {
    __extends(ListCustomRoutingAcceleratorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCustomRoutingAcceleratorsCommand(input) {
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
    ListCustomRoutingAcceleratorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "ListCustomRoutingAcceleratorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCustomRoutingAcceleratorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCustomRoutingAcceleratorsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCustomRoutingAcceleratorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCustomRoutingAcceleratorsCommand(input, context);
    };
    ListCustomRoutingAcceleratorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCustomRoutingAcceleratorsCommand(output, context);
    };
    return ListCustomRoutingAcceleratorsCommand;
}($Command));
export { ListCustomRoutingAcceleratorsCommand };
//# sourceMappingURL=ListCustomRoutingAcceleratorsCommand.js.map