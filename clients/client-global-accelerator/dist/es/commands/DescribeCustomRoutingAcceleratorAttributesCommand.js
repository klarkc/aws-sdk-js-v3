import { __extends } from "tslib";
import { DescribeCustomRoutingAcceleratorAttributesRequest, DescribeCustomRoutingAcceleratorAttributesResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand, serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describe the attributes of a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCustomRoutingAcceleratorAttributesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCustomRoutingAcceleratorAttributesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DescribeCustomRoutingAcceleratorAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomRoutingAcceleratorAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomRoutingAcceleratorAttributesCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCustomRoutingAcceleratorAttributesCommand = /** @class */ (function (_super) {
    __extends(DescribeCustomRoutingAcceleratorAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCustomRoutingAcceleratorAttributesCommand(input) {
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
    DescribeCustomRoutingAcceleratorAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "DescribeCustomRoutingAcceleratorAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCustomRoutingAcceleratorAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCustomRoutingAcceleratorAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCustomRoutingAcceleratorAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand(input, context);
    };
    DescribeCustomRoutingAcceleratorAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand(output, context);
    };
    return DescribeCustomRoutingAcceleratorAttributesCommand;
}($Command));
export { DescribeCustomRoutingAcceleratorAttributesCommand };
//# sourceMappingURL=DescribeCustomRoutingAcceleratorAttributesCommand.js.map