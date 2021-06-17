import { __extends } from "tslib";
import { CreatePipelineRequest, CreatePipelineResponse } from "../models/models_1";
import { deserializeAws_json1_1CreatePipelineCommand, serializeAws_json1_1CreatePipelineCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a pipeline using a JSON pipeline definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreatePipelineCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreatePipelineCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePipelineCommandInput} for command's `input` shape.
 * @see {@link CreatePipelineCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePipelineCommand = /** @class */ (function (_super) {
    __extends(CreatePipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePipelineCommand(input) {
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
    CreatePipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreatePipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePipelineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePipelineResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePipelineCommand(input, context);
    };
    CreatePipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePipelineCommand(output, context);
    };
    return CreatePipelineCommand;
}($Command));
export { CreatePipelineCommand };
//# sourceMappingURL=CreatePipelineCommand.js.map