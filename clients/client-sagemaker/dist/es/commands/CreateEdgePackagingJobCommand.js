import { __extends } from "tslib";
import { CreateEdgePackagingJobRequest } from "../models/models_0";
import { deserializeAws_json1_1CreateEdgePackagingJobCommand, serializeAws_json1_1CreateEdgePackagingJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a SageMaker Edge Manager model packaging job. Edge Manager will use the model artifacts from the Amazon Simple Storage Service bucket that you specify. After the model has been packaged, Amazon SageMaker saves the resulting artifacts to an S3 bucket that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateEdgePackagingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateEdgePackagingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateEdgePackagingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEdgePackagingJobCommandInput} for command's `input` shape.
 * @see {@link CreateEdgePackagingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateEdgePackagingJobCommand = /** @class */ (function (_super) {
    __extends(CreateEdgePackagingJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateEdgePackagingJobCommand(input) {
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
    CreateEdgePackagingJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateEdgePackagingJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateEdgePackagingJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateEdgePackagingJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateEdgePackagingJobCommand(input, context);
    };
    CreateEdgePackagingJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateEdgePackagingJobCommand(output, context);
    };
    return CreateEdgePackagingJobCommand;
}($Command));
export { CreateEdgePackagingJobCommand };
//# sourceMappingURL=CreateEdgePackagingJobCommand.js.map