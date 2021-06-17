import { __extends } from "tslib";
import { DescribePipelineDefinitionForExecutionRequest, DescribePipelineDefinitionForExecutionResponse, } from "../models/models_1";
import { deserializeAws_json1_1DescribePipelineDefinitionForExecutionCommand, serializeAws_json1_1DescribePipelineDefinitionForExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the details of an execution's pipeline definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribePipelineDefinitionForExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribePipelineDefinitionForExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribePipelineDefinitionForExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePipelineDefinitionForExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribePipelineDefinitionForExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePipelineDefinitionForExecutionCommand = /** @class */ (function (_super) {
    __extends(DescribePipelineDefinitionForExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePipelineDefinitionForExecutionCommand(input) {
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
    DescribePipelineDefinitionForExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribePipelineDefinitionForExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePipelineDefinitionForExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePipelineDefinitionForExecutionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePipelineDefinitionForExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePipelineDefinitionForExecutionCommand(input, context);
    };
    DescribePipelineDefinitionForExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePipelineDefinitionForExecutionCommand(output, context);
    };
    return DescribePipelineDefinitionForExecutionCommand;
}($Command));
export { DescribePipelineDefinitionForExecutionCommand };
//# sourceMappingURL=DescribePipelineDefinitionForExecutionCommand.js.map