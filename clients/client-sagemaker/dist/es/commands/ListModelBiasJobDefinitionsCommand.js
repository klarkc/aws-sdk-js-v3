import { __extends } from "tslib";
import { ListModelBiasJobDefinitionsRequest, ListModelBiasJobDefinitionsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListModelBiasJobDefinitionsCommand, serializeAws_json1_1ListModelBiasJobDefinitionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists model bias jobs definitions that satisfy various filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelBiasJobDefinitionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelBiasJobDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListModelBiasJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelBiasJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListModelBiasJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListModelBiasJobDefinitionsCommand = /** @class */ (function (_super) {
    __extends(ListModelBiasJobDefinitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListModelBiasJobDefinitionsCommand(input) {
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
    ListModelBiasJobDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListModelBiasJobDefinitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListModelBiasJobDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListModelBiasJobDefinitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListModelBiasJobDefinitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListModelBiasJobDefinitionsCommand(input, context);
    };
    ListModelBiasJobDefinitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListModelBiasJobDefinitionsCommand(output, context);
    };
    return ListModelBiasJobDefinitionsCommand;
}($Command));
export { ListModelBiasJobDefinitionsCommand };
//# sourceMappingURL=ListModelBiasJobDefinitionsCommand.js.map