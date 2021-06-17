import { __extends } from "tslib";
import { DeleteExperimentRequest, DeleteExperimentResponse } from "../models/models_1";
import { deserializeAws_json1_1DeleteExperimentCommand, serializeAws_json1_1DeleteExperimentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an SageMaker experiment. All trials associated with the experiment must be deleted
 *       first. Use the <a>ListTrials</a> API to get a list of the trials associated with
 *       the experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteExperimentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteExperimentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteExperimentCommandInput} for command's `input` shape.
 * @see {@link DeleteExperimentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteExperimentCommand = /** @class */ (function (_super) {
    __extends(DeleteExperimentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteExperimentCommand(input) {
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
    DeleteExperimentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteExperimentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteExperimentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteExperimentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteExperimentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteExperimentCommand(input, context);
    };
    DeleteExperimentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteExperimentCommand(output, context);
    };
    return DeleteExperimentCommand;
}($Command));
export { DeleteExperimentCommand };
//# sourceMappingURL=DeleteExperimentCommand.js.map