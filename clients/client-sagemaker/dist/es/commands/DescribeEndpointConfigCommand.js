import { __extends } from "tslib";
import { DescribeEndpointConfigInput, DescribeEndpointConfigOutput } from "../models/models_1";
import { deserializeAws_json1_1DescribeEndpointConfigCommand, serializeAws_json1_1DescribeEndpointConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the description of an endpoint configuration created using the
 *                 <code>CreateEndpointConfig</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeEndpointConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeEndpointConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeEndpointConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEndpointConfigCommand = /** @class */ (function (_super) {
    __extends(DescribeEndpointConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEndpointConfigCommand(input) {
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
    DescribeEndpointConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeEndpointConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEndpointConfigInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEndpointConfigOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEndpointConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEndpointConfigCommand(input, context);
    };
    DescribeEndpointConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEndpointConfigCommand(output, context);
    };
    return DescribeEndpointConfigCommand;
}($Command));
export { DescribeEndpointConfigCommand };
//# sourceMappingURL=DescribeEndpointConfigCommand.js.map