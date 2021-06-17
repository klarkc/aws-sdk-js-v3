import { __extends } from "tslib";
import { CreateCustomRoutingAcceleratorRequest, CreateCustomRoutingAcceleratorResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateCustomRoutingAcceleratorCommand, serializeAws_json1_1CreateCustomRoutingAcceleratorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands
 * 		of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p>
 * 	        <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive
 * 			traffic. To enable all destinations to receive traffic, or to specify individual port
 * 			mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html">
 * 				AllowCustomRoutingTraffic</a> operation.</p>
 * 	        <important>
 * 		          <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
 * 			US West (Oregon) Region to create or update accelerators.</p>
 * 	        </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateCustomRoutingAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateCustomRoutingAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new CreateCustomRoutingAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomRoutingAcceleratorCommandInput} for command's `input` shape.
 * @see {@link CreateCustomRoutingAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCustomRoutingAcceleratorCommand = /** @class */ (function (_super) {
    __extends(CreateCustomRoutingAcceleratorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCustomRoutingAcceleratorCommand(input) {
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
    CreateCustomRoutingAcceleratorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "CreateCustomRoutingAcceleratorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCustomRoutingAcceleratorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCustomRoutingAcceleratorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCustomRoutingAcceleratorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateCustomRoutingAcceleratorCommand(input, context);
    };
    CreateCustomRoutingAcceleratorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateCustomRoutingAcceleratorCommand(output, context);
    };
    return CreateCustomRoutingAcceleratorCommand;
}($Command));
export { CreateCustomRoutingAcceleratorCommand };
//# sourceMappingURL=CreateCustomRoutingAcceleratorCommand.js.map