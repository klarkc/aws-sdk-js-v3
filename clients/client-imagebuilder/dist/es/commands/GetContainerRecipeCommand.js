import { __extends } from "tslib";
import { GetContainerRecipeRequest, GetContainerRecipeResponse } from "../models/models_0";
import { deserializeAws_restJson1GetContainerRecipeCommand, serializeAws_restJson1GetContainerRecipeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a container recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetContainerRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetContainerRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetContainerRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerRecipeCommandInput} for command's `input` shape.
 * @see {@link GetContainerRecipeCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContainerRecipeCommand = /** @class */ (function (_super) {
    __extends(GetContainerRecipeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContainerRecipeCommand(input) {
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
    GetContainerRecipeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "GetContainerRecipeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContainerRecipeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContainerRecipeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContainerRecipeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetContainerRecipeCommand(input, context);
    };
    GetContainerRecipeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetContainerRecipeCommand(output, context);
    };
    return GetContainerRecipeCommand;
}($Command));
export { GetContainerRecipeCommand };
//# sourceMappingURL=GetContainerRecipeCommand.js.map