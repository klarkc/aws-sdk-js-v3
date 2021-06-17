import { __extends } from "tslib";
import { ListBatchInferenceJobsRequest, ListBatchInferenceJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListBatchInferenceJobsCommand, serializeAws_json1_1ListBatchInferenceJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of the batch inference jobs that have been performed off of a solution
 *       version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListBatchInferenceJobsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListBatchInferenceJobsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListBatchInferenceJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBatchInferenceJobsCommandInput} for command's `input` shape.
 * @see {@link ListBatchInferenceJobsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBatchInferenceJobsCommand = /** @class */ (function (_super) {
    __extends(ListBatchInferenceJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBatchInferenceJobsCommand(input) {
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
    ListBatchInferenceJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "ListBatchInferenceJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBatchInferenceJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListBatchInferenceJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBatchInferenceJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListBatchInferenceJobsCommand(input, context);
    };
    ListBatchInferenceJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListBatchInferenceJobsCommand(output, context);
    };
    return ListBatchInferenceJobsCommand;
}($Command));
export { ListBatchInferenceJobsCommand };
//# sourceMappingURL=ListBatchInferenceJobsCommand.js.map