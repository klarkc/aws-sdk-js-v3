import { __extends } from "tslib";
import { DescribeICD10CMInferenceJobRequest, DescribeICD10CMInferenceJobResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeICD10CMInferenceJobCommand, serializeAws_json1_1DescribeICD10CMInferenceJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the properties associated with an InferICD10CM job. Use this operation to get the
 *       status of an inference job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DescribeICD10CMInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DescribeICD10CMInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new DescribeICD10CMInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeICD10CMInferenceJobCommandInput} for command's `input` shape.
 * @see {@link DescribeICD10CMInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeICD10CMInferenceJobCommand = /** @class */ (function (_super) {
    __extends(DescribeICD10CMInferenceJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeICD10CMInferenceJobCommand(input) {
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
    DescribeICD10CMInferenceJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "DescribeICD10CMInferenceJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeICD10CMInferenceJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeICD10CMInferenceJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeICD10CMInferenceJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeICD10CMInferenceJobCommand(input, context);
    };
    DescribeICD10CMInferenceJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeICD10CMInferenceJobCommand(output, context);
    };
    return DescribeICD10CMInferenceJobCommand;
}($Command));
export { DescribeICD10CMInferenceJobCommand };
//# sourceMappingURL=DescribeICD10CMInferenceJobCommand.js.map