import { __extends } from "tslib";
import { ListContainerRecipesRequest, ListContainerRecipesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListContainerRecipesCommand, serializeAws_restJson1ListContainerRecipesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of container recipes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListContainerRecipesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListContainerRecipesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListContainerRecipesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContainerRecipesCommandInput} for command's `input` shape.
 * @see {@link ListContainerRecipesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListContainerRecipesCommand = /** @class */ (function (_super) {
    __extends(ListContainerRecipesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListContainerRecipesCommand(input) {
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
    ListContainerRecipesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "ListContainerRecipesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListContainerRecipesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListContainerRecipesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListContainerRecipesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListContainerRecipesCommand(input, context);
    };
    ListContainerRecipesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListContainerRecipesCommand(output, context);
    };
    return ListContainerRecipesCommand;
}($Command));
export { ListContainerRecipesCommand };
//# sourceMappingURL=ListContainerRecipesCommand.js.map