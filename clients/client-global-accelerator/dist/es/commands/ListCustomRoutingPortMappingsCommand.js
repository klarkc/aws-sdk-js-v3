import { __extends } from "tslib";
import { ListCustomRoutingPortMappingsRequest, ListCustomRoutingPortMappingsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListCustomRoutingPortMappingsCommand, serializeAws_json1_1ListCustomRoutingPortMappingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance
 * 		IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator.
 * 		For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port
 * 		mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p>
 * 	        <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to
 * 		your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances
 * 		in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p>
 * 	        <p>The mappings also include a flag for each destination denoting which destination IP addresses and
 * 		ports are allowed or denied traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingPortMappingsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingPortMappingsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListCustomRoutingPortMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomRoutingPortMappingsCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingPortMappingsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCustomRoutingPortMappingsCommand = /** @class */ (function (_super) {
    __extends(ListCustomRoutingPortMappingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCustomRoutingPortMappingsCommand(input) {
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
    ListCustomRoutingPortMappingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "ListCustomRoutingPortMappingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCustomRoutingPortMappingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCustomRoutingPortMappingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCustomRoutingPortMappingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCustomRoutingPortMappingsCommand(input, context);
    };
    ListCustomRoutingPortMappingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCustomRoutingPortMappingsCommand(output, context);
    };
    return ListCustomRoutingPortMappingsCommand;
}($Command));
export { ListCustomRoutingPortMappingsCommand };
//# sourceMappingURL=ListCustomRoutingPortMappingsCommand.js.map