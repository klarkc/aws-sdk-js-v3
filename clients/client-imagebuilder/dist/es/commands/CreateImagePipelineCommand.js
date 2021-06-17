import { __extends } from "tslib";
import { CreateImagePipelineRequest, CreateImagePipelineResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateImagePipelineCommand, serializeAws_restJson1CreateImagePipelineCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Creates a new image pipeline. Image pipelines enable you to automate the creation and
 *       distribution of images.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateImagePipelineCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateImagePipelineCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateImagePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImagePipelineCommandInput} for command's `input` shape.
 * @see {@link CreateImagePipelineCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateImagePipelineCommand = /** @class */ (function (_super) {
    __extends(CreateImagePipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateImagePipelineCommand(input) {
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
    CreateImagePipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "CreateImagePipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateImagePipelineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateImagePipelineResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateImagePipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateImagePipelineCommand(input, context);
    };
    CreateImagePipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateImagePipelineCommand(output, context);
    };
    return CreateImagePipelineCommand;
}($Command));
export { CreateImagePipelineCommand };
//# sourceMappingURL=CreateImagePipelineCommand.js.map