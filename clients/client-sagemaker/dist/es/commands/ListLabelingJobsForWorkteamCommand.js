import { __extends } from "tslib";
import { ListLabelingJobsForWorkteamRequest, ListLabelingJobsForWorkteamResponse } from "../models/models_2";
import { deserializeAws_json1_1ListLabelingJobsForWorkteamCommand, serializeAws_json1_1ListLabelingJobsForWorkteamCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of labeling jobs assigned to a specified work team.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListLabelingJobsForWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListLabelingJobsForWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListLabelingJobsForWorkteamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLabelingJobsForWorkteamCommandInput} for command's `input` shape.
 * @see {@link ListLabelingJobsForWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLabelingJobsForWorkteamCommand = /** @class */ (function (_super) {
    __extends(ListLabelingJobsForWorkteamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLabelingJobsForWorkteamCommand(input) {
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
    ListLabelingJobsForWorkteamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListLabelingJobsForWorkteamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLabelingJobsForWorkteamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLabelingJobsForWorkteamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLabelingJobsForWorkteamCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListLabelingJobsForWorkteamCommand(input, context);
    };
    ListLabelingJobsForWorkteamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListLabelingJobsForWorkteamCommand(output, context);
    };
    return ListLabelingJobsForWorkteamCommand;
}($Command));
export { ListLabelingJobsForWorkteamCommand };
//# sourceMappingURL=ListLabelingJobsForWorkteamCommand.js.map