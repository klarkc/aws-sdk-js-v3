import { __extends } from "tslib";
import { DescribeAutoMLJobRequest, DescribeAutoMLJobResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeAutoMLJobCommand, serializeAws_json1_1DescribeAutoMLJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about an Amazon SageMaker AutoML job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeAutoMLJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeAutoMLJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeAutoMLJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAutoMLJobCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoMLJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAutoMLJobCommand = /** @class */ (function (_super) {
    __extends(DescribeAutoMLJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAutoMLJobCommand(input) {
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
    DescribeAutoMLJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeAutoMLJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAutoMLJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAutoMLJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAutoMLJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAutoMLJobCommand(input, context);
    };
    DescribeAutoMLJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAutoMLJobCommand(output, context);
    };
    return DescribeAutoMLJobCommand;
}($Command));
export { DescribeAutoMLJobCommand };
//# sourceMappingURL=DescribeAutoMLJobCommand.js.map