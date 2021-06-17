import { __extends } from "tslib";
import { CreateReportGroupInput, CreateReportGroupOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateReportGroupCommand, serializeAws_json1_1CreateReportGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Creates a report group. A report group contains a collection of reports.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, CreateReportGroupCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, CreateReportGroupCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new CreateReportGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReportGroupCommandInput} for command's `input` shape.
 * @see {@link CreateReportGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateReportGroupCommand = /** @class */ (function (_super) {
    __extends(CreateReportGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateReportGroupCommand(input) {
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
    CreateReportGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "CreateReportGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateReportGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateReportGroupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateReportGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateReportGroupCommand(input, context);
    };
    CreateReportGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateReportGroupCommand(output, context);
    };
    return CreateReportGroupCommand;
}($Command));
export { CreateReportGroupCommand };
//# sourceMappingURL=CreateReportGroupCommand.js.map