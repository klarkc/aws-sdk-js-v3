import { __extends } from "tslib";
import { AllowCustomRoutingTrafficRequest } from "../models/models_0";
import { deserializeAws_json1_1AllowCustomRoutingTrafficCommand, serializeAws_json1_1AllowCustomRoutingTrafficCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic
 * 			for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a
 * 			specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports
 * 			outside of the range that you configured for the endpoint group.</p>
 * 		       <p>After you make changes, you can verify that the updates are complete by checking the status of your
 * 			accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, AllowCustomRoutingTrafficCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, AllowCustomRoutingTrafficCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new AllowCustomRoutingTrafficCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllowCustomRoutingTrafficCommandInput} for command's `input` shape.
 * @see {@link AllowCustomRoutingTrafficCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AllowCustomRoutingTrafficCommand = /** @class */ (function (_super) {
    __extends(AllowCustomRoutingTrafficCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AllowCustomRoutingTrafficCommand(input) {
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
    AllowCustomRoutingTrafficCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "AllowCustomRoutingTrafficCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AllowCustomRoutingTrafficRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AllowCustomRoutingTrafficCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AllowCustomRoutingTrafficCommand(input, context);
    };
    AllowCustomRoutingTrafficCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AllowCustomRoutingTrafficCommand(output, context);
    };
    return AllowCustomRoutingTrafficCommand;
}($Command));
export { AllowCustomRoutingTrafficCommand };
//# sourceMappingURL=AllowCustomRoutingTrafficCommand.js.map