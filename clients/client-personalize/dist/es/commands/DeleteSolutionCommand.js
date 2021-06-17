import { __extends } from "tslib";
import { DeleteSolutionRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteSolutionCommand, serializeAws_json1_1DeleteSolutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes all versions of a solution and the <code>Solution</code> object itself.
 *       Before deleting a solution, you must delete all campaigns based on
 *       the solution. To determine what campaigns are using the solution, call
 *       <a>ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution.
 *       You can't delete a solution if an associated <code>SolutionVersion</code> is in the
 *       CREATE PENDING or IN PROGRESS state.
 *       For more information on solutions, see <a>CreateSolution</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DeleteSolutionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DeleteSolutionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DeleteSolutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSolutionCommandInput} for command's `input` shape.
 * @see {@link DeleteSolutionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSolutionCommand = /** @class */ (function (_super) {
    __extends(DeleteSolutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSolutionCommand(input) {
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
    DeleteSolutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "DeleteSolutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSolutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSolutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteSolutionCommand(input, context);
    };
    DeleteSolutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteSolutionCommand(output, context);
    };
    return DeleteSolutionCommand;
}($Command));
export { DeleteSolutionCommand };
//# sourceMappingURL=DeleteSolutionCommand.js.map