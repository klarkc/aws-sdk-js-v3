import { __extends } from "tslib";
import { ListHumanTaskUisRequest, ListHumanTaskUisResponse } from "../models/models_2";
import { deserializeAws_json1_1ListHumanTaskUisCommand, serializeAws_json1_1ListHumanTaskUisCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the human task user interfaces in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListHumanTaskUisCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListHumanTaskUisCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListHumanTaskUisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHumanTaskUisCommandInput} for command's `input` shape.
 * @see {@link ListHumanTaskUisCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListHumanTaskUisCommand = /** @class */ (function (_super) {
    __extends(ListHumanTaskUisCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListHumanTaskUisCommand(input) {
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
    ListHumanTaskUisCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListHumanTaskUisCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListHumanTaskUisRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListHumanTaskUisResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListHumanTaskUisCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListHumanTaskUisCommand(input, context);
    };
    ListHumanTaskUisCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListHumanTaskUisCommand(output, context);
    };
    return ListHumanTaskUisCommand;
}($Command));
export { ListHumanTaskUisCommand };
//# sourceMappingURL=ListHumanTaskUisCommand.js.map