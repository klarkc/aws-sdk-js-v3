import { __extends } from "tslib";
import { ListDataQualityJobDefinitionsRequest, ListDataQualityJobDefinitionsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListDataQualityJobDefinitionsCommand, serializeAws_json1_1ListDataQualityJobDefinitionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the data quality job definitions in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListDataQualityJobDefinitionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListDataQualityJobDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListDataQualityJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataQualityJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListDataQualityJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDataQualityJobDefinitionsCommand = /** @class */ (function (_super) {
    __extends(ListDataQualityJobDefinitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDataQualityJobDefinitionsCommand(input) {
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
    ListDataQualityJobDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListDataQualityJobDefinitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDataQualityJobDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDataQualityJobDefinitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDataQualityJobDefinitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDataQualityJobDefinitionsCommand(input, context);
    };
    ListDataQualityJobDefinitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDataQualityJobDefinitionsCommand(output, context);
    };
    return ListDataQualityJobDefinitionsCommand;
}($Command));
export { ListDataQualityJobDefinitionsCommand };
//# sourceMappingURL=ListDataQualityJobDefinitionsCommand.js.map