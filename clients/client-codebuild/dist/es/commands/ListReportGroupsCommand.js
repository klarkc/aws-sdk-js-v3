import { __extends } from "tslib";
import { ListReportGroupsInput, ListReportGroupsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListReportGroupsCommand, serializeAws_json1_1ListReportGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Gets a list ARNs for the report groups in the current AWS account.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListReportGroupsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListReportGroupsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListReportGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReportGroupsCommandInput} for command's `input` shape.
 * @see {@link ListReportGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListReportGroupsCommand = /** @class */ (function (_super) {
    __extends(ListReportGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListReportGroupsCommand(input) {
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
    ListReportGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "ListReportGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListReportGroupsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListReportGroupsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListReportGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListReportGroupsCommand(input, context);
    };
    ListReportGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListReportGroupsCommand(output, context);
    };
    return ListReportGroupsCommand;
}($Command));
export { ListReportGroupsCommand };
//# sourceMappingURL=ListReportGroupsCommand.js.map