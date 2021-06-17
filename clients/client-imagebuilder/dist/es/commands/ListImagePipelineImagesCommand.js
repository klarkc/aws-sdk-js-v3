import { __extends } from "tslib";
import { ListImagePipelineImagesRequest, ListImagePipelineImagesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListImagePipelineImagesCommand, serializeAws_restJson1ListImagePipelineImagesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns a list of images created by the specified pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagePipelineImagesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImagePipelineImagesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListImagePipelineImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImagePipelineImagesCommandInput} for command's `input` shape.
 * @see {@link ListImagePipelineImagesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListImagePipelineImagesCommand = /** @class */ (function (_super) {
    __extends(ListImagePipelineImagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListImagePipelineImagesCommand(input) {
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
    ListImagePipelineImagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "ListImagePipelineImagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListImagePipelineImagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListImagePipelineImagesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListImagePipelineImagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListImagePipelineImagesCommand(input, context);
    };
    ListImagePipelineImagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListImagePipelineImagesCommand(output, context);
    };
    return ListImagePipelineImagesCommand;
}($Command));
export { ListImagePipelineImagesCommand };
//# sourceMappingURL=ListImagePipelineImagesCommand.js.map