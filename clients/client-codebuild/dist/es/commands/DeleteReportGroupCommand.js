import { __extends } from "tslib";
import { DeleteReportGroupInput, DeleteReportGroupOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteReportGroupCommand, serializeAws_json1_1DeleteReportGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a report group. Before you delete a report group, you must delete its reports. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteReportGroupCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteReportGroupCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new DeleteReportGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReportGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteReportGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteReportGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteReportGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteReportGroupCommand(input) {
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
    DeleteReportGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "DeleteReportGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteReportGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteReportGroupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteReportGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteReportGroupCommand(input, context);
    };
    DeleteReportGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteReportGroupCommand(output, context);
    };
    return DeleteReportGroupCommand;
}($Command));
export { DeleteReportGroupCommand };
//# sourceMappingURL=DeleteReportGroupCommand.js.map