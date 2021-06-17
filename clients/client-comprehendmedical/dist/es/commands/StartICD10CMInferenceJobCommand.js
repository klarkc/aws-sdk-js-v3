import { __extends } from "tslib";
import { StartICD10CMInferenceJobRequest, StartICD10CMInferenceJobResponse } from "../models/models_0";
import { deserializeAws_json1_1StartICD10CMInferenceJobCommand, serializeAws_json1_1StartICD10CMInferenceJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM
 *       ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a
 *       job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StartICD10CMInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StartICD10CMInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new StartICD10CMInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartICD10CMInferenceJobCommandInput} for command's `input` shape.
 * @see {@link StartICD10CMInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartICD10CMInferenceJobCommand = /** @class */ (function (_super) {
    __extends(StartICD10CMInferenceJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartICD10CMInferenceJobCommand(input) {
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
    StartICD10CMInferenceJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "StartICD10CMInferenceJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartICD10CMInferenceJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartICD10CMInferenceJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartICD10CMInferenceJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartICD10CMInferenceJobCommand(input, context);
    };
    StartICD10CMInferenceJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartICD10CMInferenceJobCommand(output, context);
    };
    return StartICD10CMInferenceJobCommand;
}($Command));
export { StartICD10CMInferenceJobCommand };
//# sourceMappingURL=StartICD10CMInferenceJobCommand.js.map