import { __extends } from "tslib";
import { ListReportsInput, ListReportsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListReportsCommand, serializeAws_json1_1ListReportsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Returns a list of ARNs for the reports in the current AWS account.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListReportsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListReportsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReportsCommandInput} for command's `input` shape.
 * @see {@link ListReportsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListReportsCommand = /** @class */ (function (_super) {
    __extends(ListReportsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListReportsCommand(input) {
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
    ListReportsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "ListReportsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListReportsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListReportsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListReportsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListReportsCommand(input, context);
    };
    ListReportsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListReportsCommand(output, context);
    };
    return ListReportsCommand;
}($Command));
export { ListReportsCommand };
//# sourceMappingURL=ListReportsCommand.js.map