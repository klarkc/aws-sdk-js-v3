import { __extends } from "tslib";
import { StopRxNormInferenceJobRequest, StopRxNormInferenceJobResponse } from "../models/models_0";
import { deserializeAws_json1_1StopRxNormInferenceJobCommand, serializeAws_json1_1StopRxNormInferenceJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops an InferRxNorm inference job in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StopRxNormInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StopRxNormInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new StopRxNormInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopRxNormInferenceJobCommandInput} for command's `input` shape.
 * @see {@link StopRxNormInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopRxNormInferenceJobCommand = /** @class */ (function (_super) {
    __extends(StopRxNormInferenceJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopRxNormInferenceJobCommand(input) {
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
    StopRxNormInferenceJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "StopRxNormInferenceJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopRxNormInferenceJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopRxNormInferenceJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopRxNormInferenceJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopRxNormInferenceJobCommand(input, context);
    };
    StopRxNormInferenceJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopRxNormInferenceJobCommand(output, context);
    };
    return StopRxNormInferenceJobCommand;
}($Command));
export { StopRxNormInferenceJobCommand };
//# sourceMappingURL=StopRxNormInferenceJobCommand.js.map