import { __extends } from "tslib";
import { UpdateImagePipelineRequest, UpdateImagePipelineResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateImagePipelineCommand, serializeAws_restJson1UpdateImagePipelineCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Updates an image pipeline. Image pipelines enable you to automate the creation and
 *       distribution of images.</p>
 *   	      <note>
 *             <p>UpdateImagePipeline does not support selective updates for the pipeline.
 *   		You must specify all of the required properties in the update request, not just
 *   		the properties that have changed.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, UpdateImagePipelineCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, UpdateImagePipelineCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new UpdateImagePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateImagePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdateImagePipelineCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateImagePipelineCommand = /** @class */ (function (_super) {
    __extends(UpdateImagePipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateImagePipelineCommand(input) {
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
    UpdateImagePipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "UpdateImagePipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateImagePipelineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateImagePipelineResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateImagePipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateImagePipelineCommand(input, context);
    };
    UpdateImagePipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateImagePipelineCommand(output, context);
    };
    return UpdateImagePipelineCommand;
}($Command));
export { UpdateImagePipelineCommand };
//# sourceMappingURL=UpdateImagePipelineCommand.js.map