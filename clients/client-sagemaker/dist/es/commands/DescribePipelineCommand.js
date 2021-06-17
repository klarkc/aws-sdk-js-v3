import { __extends } from "tslib";
import { DescribePipelineRequest, DescribePipelineResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribePipelineCommand, serializeAws_json1_1DescribePipelineCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the details of a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribePipelineCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribePipelineCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePipelineCommandInput} for command's `input` shape.
 * @see {@link DescribePipelineCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePipelineCommand = /** @class */ (function (_super) {
    __extends(DescribePipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePipelineCommand(input) {
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
    DescribePipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribePipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePipelineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePipelineResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePipelineCommand(input, context);
    };
    DescribePipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePipelineCommand(output, context);
    };
    return DescribePipelineCommand;
}($Command));
export { DescribePipelineCommand };
//# sourceMappingURL=DescribePipelineCommand.js.map