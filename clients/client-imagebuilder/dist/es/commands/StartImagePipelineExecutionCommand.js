import { __extends } from "tslib";
import { StartImagePipelineExecutionRequest, StartImagePipelineExecutionResponse } from "../models/models_0";
import { deserializeAws_restJson1StartImagePipelineExecutionCommand, serializeAws_restJson1StartImagePipelineExecutionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Manually triggers a pipeline to create an image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, StartImagePipelineExecutionCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, StartImagePipelineExecutionCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new StartImagePipelineExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartImagePipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StartImagePipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartImagePipelineExecutionCommand = /** @class */ (function (_super) {
    __extends(StartImagePipelineExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartImagePipelineExecutionCommand(input) {
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
    StartImagePipelineExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "StartImagePipelineExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartImagePipelineExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartImagePipelineExecutionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartImagePipelineExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartImagePipelineExecutionCommand(input, context);
    };
    StartImagePipelineExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartImagePipelineExecutionCommand(output, context);
    };
    return StartImagePipelineExecutionCommand;
}($Command));
export { StartImagePipelineExecutionCommand };
//# sourceMappingURL=StartImagePipelineExecutionCommand.js.map