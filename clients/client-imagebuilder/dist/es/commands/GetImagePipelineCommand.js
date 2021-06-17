import { __extends } from "tslib";
import { GetImagePipelineRequest, GetImagePipelineResponse } from "../models/models_0";
import { deserializeAws_restJson1GetImagePipelineCommand, serializeAws_restJson1GetImagePipelineCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Gets an image pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImagePipelineCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImagePipelineCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetImagePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImagePipelineCommandInput} for command's `input` shape.
 * @see {@link GetImagePipelineCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetImagePipelineCommand = /** @class */ (function (_super) {
    __extends(GetImagePipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetImagePipelineCommand(input) {
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
    GetImagePipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "GetImagePipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetImagePipelineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetImagePipelineResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetImagePipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetImagePipelineCommand(input, context);
    };
    GetImagePipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetImagePipelineCommand(output, context);
    };
    return GetImagePipelineCommand;
}($Command));
export { GetImagePipelineCommand };
//# sourceMappingURL=GetImagePipelineCommand.js.map