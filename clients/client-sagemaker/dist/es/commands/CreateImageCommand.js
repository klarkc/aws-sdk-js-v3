import { __extends } from "tslib";
import { CreateImageRequest, CreateImageResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateImageCommand, serializeAws_json1_1CreateImageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a custom SageMaker image. A SageMaker image is a set of image versions. Each image
 *         version represents a container image stored in Amazon Container Registry (ECR). For more information, see
 *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html">Bring your own SageMaker image</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateImageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateImageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImageCommandInput} for command's `input` shape.
 * @see {@link CreateImageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateImageCommand = /** @class */ (function (_super) {
    __extends(CreateImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateImageCommand(input) {
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
    CreateImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateImageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateImageCommand(input, context);
    };
    CreateImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateImageCommand(output, context);
    };
    return CreateImageCommand;
}($Command));
export { CreateImageCommand };
//# sourceMappingURL=CreateImageCommand.js.map