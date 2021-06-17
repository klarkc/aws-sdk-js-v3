import { __extends } from "tslib";
import { CreateHyperParameterTuningJobRequest, CreateHyperParameterTuningJobResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateHyperParameterTuningJobCommand, serializeAws_json1_1CreateHyperParameterTuningJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version
 *             of a model by running many training jobs on your dataset using the algorithm you choose
 *             and values for hyperparameters within ranges that you specify. It then chooses the
 *             hyperparameter values that result in a model that performs the best, as measured by an
 *             objective metric that you choose.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateHyperParameterTuningJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateHyperParameterTuningJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateHyperParameterTuningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHyperParameterTuningJobCommandInput} for command's `input` shape.
 * @see {@link CreateHyperParameterTuningJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateHyperParameterTuningJobCommand = /** @class */ (function (_super) {
    __extends(CreateHyperParameterTuningJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateHyperParameterTuningJobCommand(input) {
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
    CreateHyperParameterTuningJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateHyperParameterTuningJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateHyperParameterTuningJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateHyperParameterTuningJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateHyperParameterTuningJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateHyperParameterTuningJobCommand(input, context);
    };
    CreateHyperParameterTuningJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateHyperParameterTuningJobCommand(output, context);
    };
    return CreateHyperParameterTuningJobCommand;
}($Command));
export { CreateHyperParameterTuningJobCommand };
//# sourceMappingURL=CreateHyperParameterTuningJobCommand.js.map