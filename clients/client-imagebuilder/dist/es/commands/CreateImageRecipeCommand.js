import { __extends } from "tslib";
import { CreateImageRecipeRequest, CreateImageRecipeResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateImageRecipeCommand, serializeAws_restJson1CreateImageRecipeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Creates a new image recipe. Image recipes define how images are configured, tested, and
 *       assessed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateImageRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateImageRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateImageRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImageRecipeCommandInput} for command's `input` shape.
 * @see {@link CreateImageRecipeCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateImageRecipeCommand = /** @class */ (function (_super) {
    __extends(CreateImageRecipeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateImageRecipeCommand(input) {
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
    CreateImageRecipeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "CreateImageRecipeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateImageRecipeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateImageRecipeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateImageRecipeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateImageRecipeCommand(input, context);
    };
    CreateImageRecipeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateImageRecipeCommand(output, context);
    };
    return CreateImageRecipeCommand;
}($Command));
export { CreateImageRecipeCommand };
//# sourceMappingURL=CreateImageRecipeCommand.js.map