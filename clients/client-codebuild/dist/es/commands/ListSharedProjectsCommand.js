import { __extends } from "tslib";
import { ListSharedProjectsInput, ListSharedProjectsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListSharedProjectsCommand, serializeAws_json1_1ListSharedProjectsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Gets a list of projects that are shared with other AWS accounts or users. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListSharedProjectsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListSharedProjectsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListSharedProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSharedProjectsCommandInput} for command's `input` shape.
 * @see {@link ListSharedProjectsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSharedProjectsCommand = /** @class */ (function (_super) {
    __extends(ListSharedProjectsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSharedProjectsCommand(input) {
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
    ListSharedProjectsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "ListSharedProjectsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSharedProjectsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListSharedProjectsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSharedProjectsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListSharedProjectsCommand(input, context);
    };
    ListSharedProjectsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListSharedProjectsCommand(output, context);
    };
    return ListSharedProjectsCommand;
}($Command));
export { ListSharedProjectsCommand };
//# sourceMappingURL=ListSharedProjectsCommand.js.map