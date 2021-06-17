import { __extends } from "tslib";
import { DescribeLanguageModelRequest, DescribeLanguageModelResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeLanguageModelCommand, serializeAws_json1_1DescribeLanguageModelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a single custom language model. Use this information to see
 *             details about the language model in your AWS account. You can also see whether the base
 *             language model used to create your custom language model has been updated. If Amazon Transcribe has
 *             updated the base model, you can create a new custom language model using the updated
 *             base model. If the language model wasn't created, you can use this operation to
 *             understand why Amazon Transcribe couldn't create it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DescribeLanguageModelCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DescribeLanguageModelCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new DescribeLanguageModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLanguageModelCommandInput} for command's `input` shape.
 * @see {@link DescribeLanguageModelCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLanguageModelCommand = /** @class */ (function (_super) {
    __extends(DescribeLanguageModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLanguageModelCommand(input) {
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
    DescribeLanguageModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "DescribeLanguageModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLanguageModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLanguageModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLanguageModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeLanguageModelCommand(input, context);
    };
    DescribeLanguageModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeLanguageModelCommand(output, context);
    };
    return DescribeLanguageModelCommand;
}($Command));
export { DescribeLanguageModelCommand };
//# sourceMappingURL=DescribeLanguageModelCommand.js.map