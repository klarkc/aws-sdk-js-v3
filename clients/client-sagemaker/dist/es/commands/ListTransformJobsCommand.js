import { __extends } from "tslib";
import { ListTransformJobsRequest, ListTransformJobsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListTransformJobsCommand, serializeAws_json1_1ListTransformJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists transform jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTransformJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTransformJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListTransformJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTransformJobsCommandInput} for command's `input` shape.
 * @see {@link ListTransformJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTransformJobsCommand = /** @class */ (function (_super) {
    __extends(ListTransformJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTransformJobsCommand(input) {
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
    ListTransformJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListTransformJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTransformJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTransformJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTransformJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTransformJobsCommand(input, context);
    };
    ListTransformJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTransformJobsCommand(output, context);
    };
    return ListTransformJobsCommand;
}($Command));
export { ListTransformJobsCommand };
//# sourceMappingURL=ListTransformJobsCommand.js.map