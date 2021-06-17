import { __extends } from "tslib";
import { DescribeCustomRoutingAcceleratorRequest, DescribeCustomRoutingAcceleratorResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeCustomRoutingAcceleratorCommand, serializeAws_json1_1DescribeCustomRoutingAcceleratorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describe a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCustomRoutingAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCustomRoutingAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DescribeCustomRoutingAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomRoutingAcceleratorCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomRoutingAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCustomRoutingAcceleratorCommand = /** @class */ (function (_super) {
    __extends(DescribeCustomRoutingAcceleratorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCustomRoutingAcceleratorCommand(input) {
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
    DescribeCustomRoutingAcceleratorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "DescribeCustomRoutingAcceleratorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCustomRoutingAcceleratorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCustomRoutingAcceleratorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCustomRoutingAcceleratorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCustomRoutingAcceleratorCommand(input, context);
    };
    DescribeCustomRoutingAcceleratorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCustomRoutingAcceleratorCommand(output, context);
    };
    return DescribeCustomRoutingAcceleratorCommand;
}($Command));
export { DescribeCustomRoutingAcceleratorCommand };
//# sourceMappingURL=DescribeCustomRoutingAcceleratorCommand.js.map