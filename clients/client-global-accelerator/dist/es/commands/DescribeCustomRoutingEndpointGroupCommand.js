import { __extends } from "tslib";
import { DescribeCustomRoutingEndpointGroupRequest, DescribeCustomRoutingEndpointGroupResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand, serializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describe an endpoint group for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCustomRoutingEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCustomRoutingEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DescribeCustomRoutingEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomRoutingEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomRoutingEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCustomRoutingEndpointGroupCommand = /** @class */ (function (_super) {
    __extends(DescribeCustomRoutingEndpointGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCustomRoutingEndpointGroupCommand(input) {
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
    DescribeCustomRoutingEndpointGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "DescribeCustomRoutingEndpointGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCustomRoutingEndpointGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCustomRoutingEndpointGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCustomRoutingEndpointGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand(input, context);
    };
    DescribeCustomRoutingEndpointGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand(output, context);
    };
    return DescribeCustomRoutingEndpointGroupCommand;
}($Command));
export { DescribeCustomRoutingEndpointGroupCommand };
//# sourceMappingURL=DescribeCustomRoutingEndpointGroupCommand.js.map