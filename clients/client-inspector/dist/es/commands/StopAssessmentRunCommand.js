import { __extends } from "tslib";
import { StopAssessmentRunRequest } from "../models/models_0";
import { deserializeAws_json1_1StopAssessmentRunCommand, serializeAws_json1_1StopAssessmentRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops the assessment run that is specified by the ARN of the assessment
 *          run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, StopAssessmentRunCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, StopAssessmentRunCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new StopAssessmentRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link StopAssessmentRunCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopAssessmentRunCommand = /** @class */ (function (_super) {
    __extends(StopAssessmentRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopAssessmentRunCommand(input) {
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
    StopAssessmentRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "StopAssessmentRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopAssessmentRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopAssessmentRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopAssessmentRunCommand(input, context);
    };
    StopAssessmentRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopAssessmentRunCommand(output, context);
    };
    return StopAssessmentRunCommand;
}($Command));
export { StopAssessmentRunCommand };
//# sourceMappingURL=StopAssessmentRunCommand.js.map