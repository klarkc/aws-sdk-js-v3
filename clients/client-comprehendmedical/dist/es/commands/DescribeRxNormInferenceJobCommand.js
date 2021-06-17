import { __extends } from "tslib";
import { DescribeRxNormInferenceJobRequest, DescribeRxNormInferenceJobResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeRxNormInferenceJobCommand, serializeAws_json1_1DescribeRxNormInferenceJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the properties associated with an InferRxNorm job. Use this operation to get the
 *       status of an inference job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DescribeRxNormInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DescribeRxNormInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new DescribeRxNormInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRxNormInferenceJobCommandInput} for command's `input` shape.
 * @see {@link DescribeRxNormInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRxNormInferenceJobCommand = /** @class */ (function (_super) {
    __extends(DescribeRxNormInferenceJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRxNormInferenceJobCommand(input) {
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
    DescribeRxNormInferenceJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "DescribeRxNormInferenceJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRxNormInferenceJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRxNormInferenceJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRxNormInferenceJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeRxNormInferenceJobCommand(input, context);
    };
    DescribeRxNormInferenceJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeRxNormInferenceJobCommand(output, context);
    };
    return DescribeRxNormInferenceJobCommand;
}($Command));
export { DescribeRxNormInferenceJobCommand };
//# sourceMappingURL=DescribeRxNormInferenceJobCommand.js.map