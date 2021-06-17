import { __extends } from "tslib";
import { DescribeImageRequest, DescribeImageResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeImageCommand, serializeAws_json1_1DescribeImageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a SageMaker image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeImageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeImageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImageCommandInput} for command's `input` shape.
 * @see {@link DescribeImageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeImageCommand = /** @class */ (function (_super) {
    __extends(DescribeImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeImageCommand(input) {
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
    DescribeImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeImageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeImageCommand(input, context);
    };
    DescribeImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeImageCommand(output, context);
    };
    return DescribeImageCommand;
}($Command));
export { DescribeImageCommand };
//# sourceMappingURL=DescribeImageCommand.js.map