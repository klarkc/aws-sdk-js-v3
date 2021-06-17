import { __extends } from "tslib";
import { ListModelQualityJobDefinitionsRequest, ListModelQualityJobDefinitionsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListModelQualityJobDefinitionsCommand, serializeAws_json1_1ListModelQualityJobDefinitionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of model quality monitoring job definitions in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelQualityJobDefinitionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelQualityJobDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListModelQualityJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelQualityJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListModelQualityJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListModelQualityJobDefinitionsCommand = /** @class */ (function (_super) {
    __extends(ListModelQualityJobDefinitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListModelQualityJobDefinitionsCommand(input) {
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
    ListModelQualityJobDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListModelQualityJobDefinitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListModelQualityJobDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListModelQualityJobDefinitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListModelQualityJobDefinitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListModelQualityJobDefinitionsCommand(input, context);
    };
    ListModelQualityJobDefinitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListModelQualityJobDefinitionsCommand(output, context);
    };
    return ListModelQualityJobDefinitionsCommand;
}($Command));
export { ListModelQualityJobDefinitionsCommand };
//# sourceMappingURL=ListModelQualityJobDefinitionsCommand.js.map