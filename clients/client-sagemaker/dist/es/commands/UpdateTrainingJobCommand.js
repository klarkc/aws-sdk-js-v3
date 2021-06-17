import { __extends } from "tslib";
import { UpdateTrainingJobRequest, UpdateTrainingJobResponse } from "../models/models_3";
import { deserializeAws_json1_1UpdateTrainingJobCommand, serializeAws_json1_1UpdateTrainingJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update a model training job to request a new Debugger profiling configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateTrainingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateTrainingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrainingJobCommandInput} for command's `input` shape.
 * @see {@link UpdateTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTrainingJobCommand = /** @class */ (function (_super) {
    __extends(UpdateTrainingJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTrainingJobCommand(input) {
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
    UpdateTrainingJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateTrainingJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTrainingJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTrainingJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTrainingJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateTrainingJobCommand(input, context);
    };
    UpdateTrainingJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateTrainingJobCommand(output, context);
    };
    return UpdateTrainingJobCommand;
}($Command));
export { UpdateTrainingJobCommand };
//# sourceMappingURL=UpdateTrainingJobCommand.js.map