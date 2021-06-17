import { __extends } from "tslib";
import { ListICD10CMInferenceJobsRequest, ListICD10CMInferenceJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListICD10CMInferenceJobsCommand, serializeAws_json1_1ListICD10CMInferenceJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of InferICD10CM jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, ListICD10CMInferenceJobsCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, ListICD10CMInferenceJobsCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new ListICD10CMInferenceJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListICD10CMInferenceJobsCommandInput} for command's `input` shape.
 * @see {@link ListICD10CMInferenceJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListICD10CMInferenceJobsCommand = /** @class */ (function (_super) {
    __extends(ListICD10CMInferenceJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListICD10CMInferenceJobsCommand(input) {
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
    ListICD10CMInferenceJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "ListICD10CMInferenceJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListICD10CMInferenceJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListICD10CMInferenceJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListICD10CMInferenceJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListICD10CMInferenceJobsCommand(input, context);
    };
    ListICD10CMInferenceJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListICD10CMInferenceJobsCommand(output, context);
    };
    return ListICD10CMInferenceJobsCommand;
}($Command));
export { ListICD10CMInferenceJobsCommand };
//# sourceMappingURL=ListICD10CMInferenceJobsCommand.js.map