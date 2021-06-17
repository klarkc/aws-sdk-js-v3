import { __extends } from "tslib";
import { ListApplicationRevisionsInput, ListApplicationRevisionsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListApplicationRevisionsCommand, serializeAws_json1_1ListApplicationRevisionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists information about revisions for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListApplicationRevisionsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListApplicationRevisionsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListApplicationRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApplicationRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationRevisionsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListApplicationRevisionsCommand = /** @class */ (function (_super) {
    __extends(ListApplicationRevisionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListApplicationRevisionsCommand(input) {
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
    ListApplicationRevisionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "ListApplicationRevisionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListApplicationRevisionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListApplicationRevisionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListApplicationRevisionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListApplicationRevisionsCommand(input, context);
    };
    ListApplicationRevisionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListApplicationRevisionsCommand(output, context);
    };
    return ListApplicationRevisionsCommand;
}($Command));
export { ListApplicationRevisionsCommand };
//# sourceMappingURL=ListApplicationRevisionsCommand.js.map