import { __extends } from "tslib";
import { DeleteReportInput, DeleteReportOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteReportCommand, serializeAws_json1_1DeleteReportCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Deletes a report.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteReportCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteReportCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new DeleteReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReportCommandInput} for command's `input` shape.
 * @see {@link DeleteReportCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteReportCommand = /** @class */ (function (_super) {
    __extends(DeleteReportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteReportCommand(input) {
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
    DeleteReportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "DeleteReportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteReportInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteReportOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteReportCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteReportCommand(input, context);
    };
    DeleteReportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteReportCommand(output, context);
    };
    return DeleteReportCommand;
}($Command));
export { DeleteReportCommand };
//# sourceMappingURL=DeleteReportCommand.js.map