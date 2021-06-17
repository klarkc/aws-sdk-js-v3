import { __extends } from "tslib";
import { ListSolutionVersionsRequest, ListSolutionVersionsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListSolutionVersionsCommand, serializeAws_json1_1ListSolutionVersionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of solution versions for the given solution. When a solution is not
 *       specified, all the solution versions associated with the account are listed. The response
 *       provides the properties for each solution version, including the Amazon Resource Name (ARN).
 *       For more information on solutions, see <a>CreateSolution</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListSolutionVersionsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListSolutionVersionsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListSolutionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSolutionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListSolutionVersionsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSolutionVersionsCommand = /** @class */ (function (_super) {
    __extends(ListSolutionVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSolutionVersionsCommand(input) {
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
    ListSolutionVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "ListSolutionVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSolutionVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSolutionVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSolutionVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListSolutionVersionsCommand(input, context);
    };
    ListSolutionVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListSolutionVersionsCommand(output, context);
    };
    return ListSolutionVersionsCommand;
}($Command));
export { ListSolutionVersionsCommand };
//# sourceMappingURL=ListSolutionVersionsCommand.js.map