import { __extends } from "tslib";
import { ListImageRecipesRequest, ListImageRecipesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListImageRecipesCommand, serializeAws_restJson1ListImageRecipesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns a list of image recipes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImageRecipesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImageRecipesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListImageRecipesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImageRecipesCommandInput} for command's `input` shape.
 * @see {@link ListImageRecipesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListImageRecipesCommand = /** @class */ (function (_super) {
    __extends(ListImageRecipesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListImageRecipesCommand(input) {
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
    ListImageRecipesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "ListImageRecipesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListImageRecipesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListImageRecipesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListImageRecipesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListImageRecipesCommand(input, context);
    };
    ListImageRecipesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListImageRecipesCommand(output, context);
    };
    return ListImageRecipesCommand;
}($Command));
export { ListImageRecipesCommand };
//# sourceMappingURL=ListImageRecipesCommand.js.map