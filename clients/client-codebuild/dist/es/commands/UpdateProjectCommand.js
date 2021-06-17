import { __extends } from "tslib";
import { UpdateProjectInput, UpdateProjectOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateProjectCommand, serializeAws_json1_1UpdateProjectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the settings of a build project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, UpdateProjectCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, UpdateProjectCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new UpdateProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProjectCommandInput} for command's `input` shape.
 * @see {@link UpdateProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateProjectCommand = /** @class */ (function (_super) {
    __extends(UpdateProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateProjectCommand(input) {
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
    UpdateProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "UpdateProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateProjectInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateProjectOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateProjectCommand(input, context);
    };
    UpdateProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateProjectCommand(output, context);
    };
    return UpdateProjectCommand;
}($Command));
export { UpdateProjectCommand };
//# sourceMappingURL=UpdateProjectCommand.js.map