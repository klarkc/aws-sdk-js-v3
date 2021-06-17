import { __extends } from "tslib";
import { DescribeAcceleratorRequest, DescribeAcceleratorResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeAcceleratorCommand, serializeAws_json1_1DescribeAcceleratorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describe an accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DescribeAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAcceleratorCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAcceleratorCommand = /** @class */ (function (_super) {
    __extends(DescribeAcceleratorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAcceleratorCommand(input) {
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
    DescribeAcceleratorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "DescribeAcceleratorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAcceleratorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAcceleratorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAcceleratorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAcceleratorCommand(input, context);
    };
    DescribeAcceleratorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAcceleratorCommand(output, context);
    };
    return DescribeAcceleratorCommand;
}($Command));
export { DescribeAcceleratorCommand };
//# sourceMappingURL=DescribeAcceleratorCommand.js.map