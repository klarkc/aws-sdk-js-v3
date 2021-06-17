import { __extends } from "tslib";
import { ListCustomRoutingPortMappingsByDestinationRequest, ListCustomRoutingPortMappingsByDestinationResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand, serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The
 * 			response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that
 * 			span multiple custom routing accelerators in your account, or for scenarios where you only want to
 * 			list the port mappings for a specific destination instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingPortMappingsByDestinationCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingPortMappingsByDestinationCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListCustomRoutingPortMappingsByDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomRoutingPortMappingsByDestinationCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingPortMappingsByDestinationCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCustomRoutingPortMappingsByDestinationCommand = /** @class */ (function (_super) {
    __extends(ListCustomRoutingPortMappingsByDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCustomRoutingPortMappingsByDestinationCommand(input) {
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
    ListCustomRoutingPortMappingsByDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "ListCustomRoutingPortMappingsByDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCustomRoutingPortMappingsByDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCustomRoutingPortMappingsByDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCustomRoutingPortMappingsByDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand(input, context);
    };
    ListCustomRoutingPortMappingsByDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand(output, context);
    };
    return ListCustomRoutingPortMappingsByDestinationCommand;
}($Command));
export { ListCustomRoutingPortMappingsByDestinationCommand };
//# sourceMappingURL=ListCustomRoutingPortMappingsByDestinationCommand.js.map