import { __extends } from "tslib";
import { ListRecipesRequest, ListRecipesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListRecipesCommand, serializeAws_json1_1ListRecipesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of available recipes. The response provides the properties
 *        for each recipe, including the recipe's Amazon Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListRecipesCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListRecipesCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListRecipesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecipesCommandInput} for command's `input` shape.
 * @see {@link ListRecipesCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRecipesCommand = /** @class */ (function (_super) {
    __extends(ListRecipesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRecipesCommand(input) {
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
    ListRecipesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "ListRecipesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRecipesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRecipesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRecipesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRecipesCommand(input, context);
    };
    ListRecipesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRecipesCommand(output, context);
    };
    return ListRecipesCommand;
}($Command));
export { ListRecipesCommand };
//# sourceMappingURL=ListRecipesCommand.js.map