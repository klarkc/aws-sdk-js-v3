import { __extends } from "tslib";
import { ListBuildsInput, ListBuildsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListBuildsCommand, serializeAws_json1_1ListBuildsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of build IDs, with each build ID representing a single build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListBuildsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListBuildsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListBuildsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBuildsCommandInput} for command's `input` shape.
 * @see {@link ListBuildsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBuildsCommand = /** @class */ (function (_super) {
    __extends(ListBuildsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBuildsCommand(input) {
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
    ListBuildsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "ListBuildsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBuildsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListBuildsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBuildsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListBuildsCommand(input, context);
    };
    ListBuildsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListBuildsCommand(output, context);
    };
    return ListBuildsCommand;
}($Command));
export { ListBuildsCommand };
//# sourceMappingURL=ListBuildsCommand.js.map