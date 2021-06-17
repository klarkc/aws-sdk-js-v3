import { __extends } from "tslib";
import { ListBuildsForProjectInput, ListBuildsForProjectOutput } from "../models/models_0";
import { deserializeAws_json1_1ListBuildsForProjectCommand, serializeAws_json1_1ListBuildsForProjectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of build identifiers for the specified build project, with each build
 *             identifier representing a single build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListBuildsForProjectCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListBuildsForProjectCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListBuildsForProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBuildsForProjectCommandInput} for command's `input` shape.
 * @see {@link ListBuildsForProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBuildsForProjectCommand = /** @class */ (function (_super) {
    __extends(ListBuildsForProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBuildsForProjectCommand(input) {
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
    ListBuildsForProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "ListBuildsForProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBuildsForProjectInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListBuildsForProjectOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBuildsForProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListBuildsForProjectCommand(input, context);
    };
    ListBuildsForProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListBuildsForProjectCommand(output, context);
    };
    return ListBuildsForProjectCommand;
}($Command));
export { ListBuildsForProjectCommand };
//# sourceMappingURL=ListBuildsForProjectCommand.js.map