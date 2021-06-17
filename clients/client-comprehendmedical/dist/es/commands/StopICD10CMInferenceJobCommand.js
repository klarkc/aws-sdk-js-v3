import { __extends } from "tslib";
import { StopICD10CMInferenceJobRequest, StopICD10CMInferenceJobResponse } from "../models/models_0";
import { deserializeAws_json1_1StopICD10CMInferenceJobCommand, serializeAws_json1_1StopICD10CMInferenceJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops an InferICD10CM inference job in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StopICD10CMInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StopICD10CMInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new StopICD10CMInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopICD10CMInferenceJobCommandInput} for command's `input` shape.
 * @see {@link StopICD10CMInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopICD10CMInferenceJobCommand = /** @class */ (function (_super) {
    __extends(StopICD10CMInferenceJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopICD10CMInferenceJobCommand(input) {
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
    StopICD10CMInferenceJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "StopICD10CMInferenceJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopICD10CMInferenceJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopICD10CMInferenceJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopICD10CMInferenceJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopICD10CMInferenceJobCommand(input, context);
    };
    StopICD10CMInferenceJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopICD10CMInferenceJobCommand(output, context);
    };
    return StopICD10CMInferenceJobCommand;
}($Command));
export { StopICD10CMInferenceJobCommand };
//# sourceMappingURL=StopICD10CMInferenceJobCommand.js.map