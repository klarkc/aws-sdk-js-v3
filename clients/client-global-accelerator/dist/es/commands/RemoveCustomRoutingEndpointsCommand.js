import { __extends } from "tslib";
import { RemoveCustomRoutingEndpointsRequest } from "../models/models_0";
import { deserializeAws_json1_1RemoveCustomRoutingEndpointsCommand, serializeAws_json1_1RemoveCustomRoutingEndpointsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Remove endpoints from a custom routing accelerator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, RemoveCustomRoutingEndpointsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, RemoveCustomRoutingEndpointsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new RemoveCustomRoutingEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveCustomRoutingEndpointsCommandInput} for command's `input` shape.
 * @see {@link RemoveCustomRoutingEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveCustomRoutingEndpointsCommand = /** @class */ (function (_super) {
    __extends(RemoveCustomRoutingEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveCustomRoutingEndpointsCommand(input) {
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
    RemoveCustomRoutingEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "RemoveCustomRoutingEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveCustomRoutingEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveCustomRoutingEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RemoveCustomRoutingEndpointsCommand(input, context);
    };
    RemoveCustomRoutingEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RemoveCustomRoutingEndpointsCommand(output, context);
    };
    return RemoveCustomRoutingEndpointsCommand;
}($Command));
export { RemoveCustomRoutingEndpointsCommand };
//# sourceMappingURL=RemoveCustomRoutingEndpointsCommand.js.map