import { __extends } from "tslib";
import { DescribeLabelingJobRequest, DescribeLabelingJobResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeLabelingJobCommand, serializeAws_json1_1DescribeLabelingJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a labeling job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeLabelingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeLabelingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeLabelingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLabelingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeLabelingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLabelingJobCommand = /** @class */ (function (_super) {
    __extends(DescribeLabelingJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLabelingJobCommand(input) {
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
    DescribeLabelingJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeLabelingJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLabelingJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLabelingJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLabelingJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeLabelingJobCommand(input, context);
    };
    DescribeLabelingJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeLabelingJobCommand(output, context);
    };
    return DescribeLabelingJobCommand;
}($Command));
export { DescribeLabelingJobCommand };
//# sourceMappingURL=DescribeLabelingJobCommand.js.map