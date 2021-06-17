import { __extends } from "tslib";
import { ListActionsRequest, ListActionsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListActionsCommand, serializeAws_json1_1ListActionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the actions in your account and their properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListActionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListActionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListActionsCommandInput} for command's `input` shape.
 * @see {@link ListActionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListActionsCommand = /** @class */ (function (_super) {
    __extends(ListActionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListActionsCommand(input) {
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
    ListActionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListActionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListActionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListActionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListActionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListActionsCommand(input, context);
    };
    ListActionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListActionsCommand(output, context);
    };
    return ListActionsCommand;
}($Command));
export { ListActionsCommand };
//# sourceMappingURL=ListActionsCommand.js.map