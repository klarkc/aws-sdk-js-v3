import { __extends } from "tslib";
import { CreateImageRequest, CreateImageResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateImageCommand, serializeAws_restJson1CreateImageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Creates a new image. This request will create a new image along with all of the
 *       configured output resources defined in the distribution configuration. You must specify
 *       exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateImageCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateImageCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImageCommandInput} for command's `input` shape.
 * @see {@link CreateImageCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "ImagebuilderClient";
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
        return serializeAws_restJson1CreateImageCommand(input, context);
    };
    CreateImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateImageCommand(output, context);
    };
    return CreateImageCommand;
}($Command));
export { CreateImageCommand };
//# sourceMappingURL=CreateImageCommand.js.map