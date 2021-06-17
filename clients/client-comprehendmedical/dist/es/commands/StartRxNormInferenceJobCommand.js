import { __extends } from "tslib";
import { StartRxNormInferenceJobRequest, StartRxNormInferenceJobResponse } from "../models/models_0";
import { deserializeAws_json1_1StartRxNormInferenceJobCommand, serializeAws_json1_1StartRxNormInferenceJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts an asynchronous job to detect medication entities and link them to the RxNorm
 *       ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a
 *       job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StartRxNormInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StartRxNormInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new StartRxNormInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartRxNormInferenceJobCommandInput} for command's `input` shape.
 * @see {@link StartRxNormInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartRxNormInferenceJobCommand = /** @class */ (function (_super) {
    __extends(StartRxNormInferenceJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartRxNormInferenceJobCommand(input) {
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
    StartRxNormInferenceJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "StartRxNormInferenceJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartRxNormInferenceJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartRxNormInferenceJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartRxNormInferenceJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartRxNormInferenceJobCommand(input, context);
    };
    StartRxNormInferenceJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartRxNormInferenceJobCommand(output, context);
    };
    return StartRxNormInferenceJobCommand;
}($Command));
export { StartRxNormInferenceJobCommand };
//# sourceMappingURL=StartRxNormInferenceJobCommand.js.map