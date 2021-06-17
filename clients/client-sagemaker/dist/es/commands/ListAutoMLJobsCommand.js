import { __extends } from "tslib";
import { ListAutoMLJobsRequest, ListAutoMLJobsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListAutoMLJobsCommand, serializeAws_json1_1ListAutoMLJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Request a list of jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAutoMLJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAutoMLJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListAutoMLJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAutoMLJobsCommandInput} for command's `input` shape.
 * @see {@link ListAutoMLJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAutoMLJobsCommand = /** @class */ (function (_super) {
    __extends(ListAutoMLJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAutoMLJobsCommand(input) {
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
    ListAutoMLJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListAutoMLJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAutoMLJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAutoMLJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAutoMLJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAutoMLJobsCommand(input, context);
    };
    ListAutoMLJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAutoMLJobsCommand(output, context);
    };
    return ListAutoMLJobsCommand;
}($Command));
export { ListAutoMLJobsCommand };
//# sourceMappingURL=ListAutoMLJobsCommand.js.map