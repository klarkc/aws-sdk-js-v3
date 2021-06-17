import { __extends } from "tslib";
import { UpdateReportGroupInput, UpdateReportGroupOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateReportGroupCommand, serializeAws_json1_1UpdateReportGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Updates a report group.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, UpdateReportGroupCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, UpdateReportGroupCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new UpdateReportGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateReportGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateReportGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateReportGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateReportGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateReportGroupCommand(input) {
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
    UpdateReportGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "UpdateReportGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateReportGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateReportGroupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateReportGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateReportGroupCommand(input, context);
    };
    UpdateReportGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateReportGroupCommand(output, context);
    };
    return UpdateReportGroupCommand;
}($Command));
export { UpdateReportGroupCommand };
//# sourceMappingURL=UpdateReportGroupCommand.js.map