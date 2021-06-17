import { __extends } from "tslib";
import { CreateAppRequest, CreateAppResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateAppCommand, serializeAws_json1_1CreateAppCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a running app for the specified UserProfile. Supported apps are
 *       <code>JupyterServer</code> and <code>KernelGateway</code>. This operation is automatically
 *       invoked by Amazon SageMaker Studio upon access to the associated Domain, and when new kernel
 *       configurations are selected by the user. A user may have multiple Apps active simultaneously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateAppCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateAppCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppCommandInput} for command's `input` shape.
 * @see {@link CreateAppCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAppCommand = /** @class */ (function (_super) {
    __extends(CreateAppCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAppCommand(input) {
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
    CreateAppCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateAppCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAppRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAppResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAppCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAppCommand(input, context);
    };
    CreateAppCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAppCommand(output, context);
    };
    return CreateAppCommand;
}($Command));
export { CreateAppCommand };
//# sourceMappingURL=CreateAppCommand.js.map