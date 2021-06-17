import { __extends } from "tslib";
import { ListRxNormInferenceJobsRequest, ListRxNormInferenceJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListRxNormInferenceJobsCommand, serializeAws_json1_1ListRxNormInferenceJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of InferRxNorm jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, ListRxNormInferenceJobsCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, ListRxNormInferenceJobsCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new ListRxNormInferenceJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRxNormInferenceJobsCommandInput} for command's `input` shape.
 * @see {@link ListRxNormInferenceJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRxNormInferenceJobsCommand = /** @class */ (function (_super) {
    __extends(ListRxNormInferenceJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRxNormInferenceJobsCommand(input) {
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
    ListRxNormInferenceJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "ListRxNormInferenceJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRxNormInferenceJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRxNormInferenceJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRxNormInferenceJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRxNormInferenceJobsCommand(input, context);
    };
    ListRxNormInferenceJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRxNormInferenceJobsCommand(output, context);
    };
    return ListRxNormInferenceJobsCommand;
}($Command));
export { ListRxNormInferenceJobsCommand };
//# sourceMappingURL=ListRxNormInferenceJobsCommand.js.map