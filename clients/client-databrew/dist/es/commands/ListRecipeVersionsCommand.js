import { __extends } from "tslib";
import { ListRecipeVersionsRequest, ListRecipeVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListRecipeVersionsCommand, serializeAws_restJson1ListRecipeVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the versions of a particular DataBrew recipe, except for
 *                 <code>LATEST_WORKING</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListRecipeVersionsCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListRecipeVersionsCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new ListRecipeVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecipeVersionsCommandInput} for command's `input` shape.
 * @see {@link ListRecipeVersionsCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRecipeVersionsCommand = /** @class */ (function (_super) {
    __extends(ListRecipeVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRecipeVersionsCommand(input) {
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
    ListRecipeVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "ListRecipeVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRecipeVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRecipeVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRecipeVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRecipeVersionsCommand(input, context);
    };
    ListRecipeVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRecipeVersionsCommand(output, context);
    };
    return ListRecipeVersionsCommand;
}($Command));
export { ListRecipeVersionsCommand };
//# sourceMappingURL=ListRecipeVersionsCommand.js.map