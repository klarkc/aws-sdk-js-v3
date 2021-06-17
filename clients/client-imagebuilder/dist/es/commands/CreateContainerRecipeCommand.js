import { __extends } from "tslib";
import { CreateContainerRecipeRequest, CreateContainerRecipeResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateContainerRecipeCommand, serializeAws_restJson1CreateContainerRecipeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateContainerRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateContainerRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateContainerRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContainerRecipeCommandInput} for command's `input` shape.
 * @see {@link CreateContainerRecipeCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateContainerRecipeCommand = /** @class */ (function (_super) {
    __extends(CreateContainerRecipeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateContainerRecipeCommand(input) {
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
    CreateContainerRecipeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "CreateContainerRecipeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateContainerRecipeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateContainerRecipeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateContainerRecipeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateContainerRecipeCommand(input, context);
    };
    CreateContainerRecipeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateContainerRecipeCommand(output, context);
    };
    return CreateContainerRecipeCommand;
}($Command));
export { CreateContainerRecipeCommand };
//# sourceMappingURL=CreateContainerRecipeCommand.js.map