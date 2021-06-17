import { __extends } from "tslib";
import { GetImageRecipeRequest, GetImageRecipeResponse } from "../models/models_0";
import { deserializeAws_restJson1GetImageRecipeCommand, serializeAws_restJson1GetImageRecipeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Gets an image recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImageRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImageRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetImageRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImageRecipeCommandInput} for command's `input` shape.
 * @see {@link GetImageRecipeCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetImageRecipeCommand = /** @class */ (function (_super) {
    __extends(GetImageRecipeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetImageRecipeCommand(input) {
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
    GetImageRecipeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "GetImageRecipeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetImageRecipeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetImageRecipeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetImageRecipeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetImageRecipeCommand(input, context);
    };
    GetImageRecipeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetImageRecipeCommand(output, context);
    };
    return GetImageRecipeCommand;
}($Command));
export { GetImageRecipeCommand };
//# sourceMappingURL=GetImageRecipeCommand.js.map