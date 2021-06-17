import { __extends } from "tslib";
import { CreateAppImageConfigRequest, CreateAppImageConfigResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateAppImageConfigCommand, serializeAws_json1_1CreateAppImageConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a configuration for running a SageMaker image as a KernelGateway app. The
 *         configuration specifies the Amazon Elastic File System (EFS) storage volume on the image, and a list of the
 *         kernels in the image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateAppImageConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateAppImageConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateAppImageConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppImageConfigCommandInput} for command's `input` shape.
 * @see {@link CreateAppImageConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAppImageConfigCommand = /** @class */ (function (_super) {
    __extends(CreateAppImageConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAppImageConfigCommand(input) {
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
    CreateAppImageConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateAppImageConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAppImageConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAppImageConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAppImageConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAppImageConfigCommand(input, context);
    };
    CreateAppImageConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAppImageConfigCommand(output, context);
    };
    return CreateAppImageConfigCommand;
}($Command));
export { CreateAppImageConfigCommand };
//# sourceMappingURL=CreateAppImageConfigCommand.js.map