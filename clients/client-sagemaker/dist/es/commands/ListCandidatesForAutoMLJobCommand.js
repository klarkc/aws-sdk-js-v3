import { __extends } from "tslib";
import { ListCandidatesForAutoMLJobRequest, ListCandidatesForAutoMLJobResponse } from "../models/models_2";
import { deserializeAws_json1_1ListCandidatesForAutoMLJobCommand, serializeAws_json1_1ListCandidatesForAutoMLJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the candidates created for the job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListCandidatesForAutoMLJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListCandidatesForAutoMLJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListCandidatesForAutoMLJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCandidatesForAutoMLJobCommandInput} for command's `input` shape.
 * @see {@link ListCandidatesForAutoMLJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCandidatesForAutoMLJobCommand = /** @class */ (function (_super) {
    __extends(ListCandidatesForAutoMLJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCandidatesForAutoMLJobCommand(input) {
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
    ListCandidatesForAutoMLJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListCandidatesForAutoMLJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCandidatesForAutoMLJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCandidatesForAutoMLJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCandidatesForAutoMLJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCandidatesForAutoMLJobCommand(input, context);
    };
    ListCandidatesForAutoMLJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCandidatesForAutoMLJobCommand(output, context);
    };
    return ListCandidatesForAutoMLJobCommand;
}($Command));
export { ListCandidatesForAutoMLJobCommand };
//# sourceMappingURL=ListCandidatesForAutoMLJobCommand.js.map