import { __extends } from "tslib";
import { StartAssessmentRunRequest, StartAssessmentRunResponse } from "../models/models_0";
import { deserializeAws_json1_1StartAssessmentRunCommand, serializeAws_json1_1StartAssessmentRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the assessment run specified by the ARN of the assessment template. For this
 *          API to function properly, you must not exceed the limit of running up to 500 concurrent
 *          agents per AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, StartAssessmentRunCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, StartAssessmentRunCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new StartAssessmentRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link StartAssessmentRunCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartAssessmentRunCommand = /** @class */ (function (_super) {
    __extends(StartAssessmentRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartAssessmentRunCommand(input) {
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
    StartAssessmentRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "StartAssessmentRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartAssessmentRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartAssessmentRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartAssessmentRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartAssessmentRunCommand(input, context);
    };
    StartAssessmentRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartAssessmentRunCommand(output, context);
    };
    return StartAssessmentRunCommand;
}($Command));
export { StartAssessmentRunCommand };
//# sourceMappingURL=StartAssessmentRunCommand.js.map