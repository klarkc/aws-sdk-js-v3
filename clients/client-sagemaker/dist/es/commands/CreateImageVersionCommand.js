import { __extends } from "tslib";
import { CreateImageVersionRequest, CreateImageVersionResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateImageVersionCommand, serializeAws_json1_1CreateImageVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a version of the SageMaker image specified by <code>ImageName</code>. The version
 *         represents the Amazon Container Registry (ECR) container image specified by <code>BaseImage</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateImageVersionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateImageVersionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateImageVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImageVersionCommandInput} for command's `input` shape.
 * @see {@link CreateImageVersionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateImageVersionCommand = /** @class */ (function (_super) {
    __extends(CreateImageVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateImageVersionCommand(input) {
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
    CreateImageVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateImageVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateImageVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateImageVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateImageVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateImageVersionCommand(input, context);
    };
    CreateImageVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateImageVersionCommand(output, context);
    };
    return CreateImageVersionCommand;
}($Command));
export { CreateImageVersionCommand };
//# sourceMappingURL=CreateImageVersionCommand.js.map