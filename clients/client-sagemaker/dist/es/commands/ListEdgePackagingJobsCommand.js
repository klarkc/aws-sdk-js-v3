import { __extends } from "tslib";
import { ListEdgePackagingJobsRequest, ListEdgePackagingJobsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListEdgePackagingJobsCommand, serializeAws_json1_1ListEdgePackagingJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of edge packaging jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListEdgePackagingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListEdgePackagingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListEdgePackagingJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEdgePackagingJobsCommandInput} for command's `input` shape.
 * @see {@link ListEdgePackagingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEdgePackagingJobsCommand = /** @class */ (function (_super) {
    __extends(ListEdgePackagingJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEdgePackagingJobsCommand(input) {
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
    ListEdgePackagingJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListEdgePackagingJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEdgePackagingJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEdgePackagingJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEdgePackagingJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListEdgePackagingJobsCommand(input, context);
    };
    ListEdgePackagingJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListEdgePackagingJobsCommand(output, context);
    };
    return ListEdgePackagingJobsCommand;
}($Command));
export { ListEdgePackagingJobsCommand };
//# sourceMappingURL=ListEdgePackagingJobsCommand.js.map