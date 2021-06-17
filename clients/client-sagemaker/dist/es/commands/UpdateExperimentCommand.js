import { __extends } from "tslib";
import { UpdateExperimentRequest, UpdateExperimentResponse } from "../models/models_2";
import { deserializeAws_json1_1UpdateExperimentCommand, serializeAws_json1_1UpdateExperimentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds, updates, or removes the description of an experiment. Updates the display name of an
 *       experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateExperimentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateExperimentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateExperimentCommandInput} for command's `input` shape.
 * @see {@link UpdateExperimentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateExperimentCommand = /** @class */ (function (_super) {
    __extends(UpdateExperimentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateExperimentCommand(input) {
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
    UpdateExperimentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateExperimentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateExperimentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateExperimentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateExperimentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateExperimentCommand(input, context);
    };
    UpdateExperimentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateExperimentCommand(output, context);
    };
    return UpdateExperimentCommand;
}($Command));
export { UpdateExperimentCommand };
//# sourceMappingURL=UpdateExperimentCommand.js.map