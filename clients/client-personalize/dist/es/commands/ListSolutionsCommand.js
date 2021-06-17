import { __extends } from "tslib";
import { ListSolutionsRequest, ListSolutionsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListSolutionsCommand, serializeAws_json1_1ListSolutionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of solutions that use the given dataset group.
 *       When a dataset group is not specified, all the solutions associated with the account are listed.
 *       The response provides the properties for each solution, including the Amazon Resource Name (ARN).
 *       For more information on solutions, see <a>CreateSolution</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListSolutionsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListSolutionsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListSolutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSolutionsCommandInput} for command's `input` shape.
 * @see {@link ListSolutionsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSolutionsCommand = /** @class */ (function (_super) {
    __extends(ListSolutionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSolutionsCommand(input) {
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
    ListSolutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "ListSolutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSolutionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSolutionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSolutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListSolutionsCommand(input, context);
    };
    ListSolutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListSolutionsCommand(output, context);
    };
    return ListSolutionsCommand;
}($Command));
export { ListSolutionsCommand };
//# sourceMappingURL=ListSolutionsCommand.js.map