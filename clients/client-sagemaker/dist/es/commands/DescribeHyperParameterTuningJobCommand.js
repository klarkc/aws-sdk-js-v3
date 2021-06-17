import { __extends } from "tslib";
import { DescribeHyperParameterTuningJobRequest, DescribeHyperParameterTuningJobResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeHyperParameterTuningJobCommand, serializeAws_json1_1DescribeHyperParameterTuningJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets
 *             a description of a hyperparameter tuning job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeHyperParameterTuningJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeHyperParameterTuningJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeHyperParameterTuningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHyperParameterTuningJobCommandInput} for command's `input` shape.
 * @see {@link DescribeHyperParameterTuningJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeHyperParameterTuningJobCommand = /** @class */ (function (_super) {
    __extends(DescribeHyperParameterTuningJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeHyperParameterTuningJobCommand(input) {
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
    DescribeHyperParameterTuningJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeHyperParameterTuningJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeHyperParameterTuningJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeHyperParameterTuningJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeHyperParameterTuningJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeHyperParameterTuningJobCommand(input, context);
    };
    DescribeHyperParameterTuningJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeHyperParameterTuningJobCommand(output, context);
    };
    return DescribeHyperParameterTuningJobCommand;
}($Command));
export { DescribeHyperParameterTuningJobCommand };
//# sourceMappingURL=DescribeHyperParameterTuningJobCommand.js.map