import { __extends } from "tslib";
import { UpdatePipelineRequest, UpdatePipelineResponse } from "../models/models_2";
import { deserializeAws_json1_1UpdatePipelineCommand, serializeAws_json1_1UpdatePipelineCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdatePipelineCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdatePipelineCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePipelineCommand = /** @class */ (function (_super) {
    __extends(UpdatePipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePipelineCommand(input) {
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
    UpdatePipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdatePipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePipelineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePipelineResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdatePipelineCommand(input, context);
    };
    UpdatePipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdatePipelineCommand(output, context);
    };
    return UpdatePipelineCommand;
}($Command));
export { UpdatePipelineCommand };
//# sourceMappingURL=UpdatePipelineCommand.js.map