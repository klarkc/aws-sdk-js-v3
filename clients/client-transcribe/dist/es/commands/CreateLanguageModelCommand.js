import { __extends } from "tslib";
import { CreateLanguageModelRequest, CreateLanguageModelResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateLanguageModelCommand, serializeAws_json1_1CreateLanguageModelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new custom language model. Use Amazon S3 prefixes to provide the location of your
 *             input files. The time it takes to create your model depends on the size of your training
 *             data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, CreateLanguageModelCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, CreateLanguageModelCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new CreateLanguageModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLanguageModelCommandInput} for command's `input` shape.
 * @see {@link CreateLanguageModelCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLanguageModelCommand = /** @class */ (function (_super) {
    __extends(CreateLanguageModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLanguageModelCommand(input) {
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
    CreateLanguageModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "CreateLanguageModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLanguageModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLanguageModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLanguageModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLanguageModelCommand(input, context);
    };
    CreateLanguageModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLanguageModelCommand(output, context);
    };
    return CreateLanguageModelCommand;
}($Command));
export { CreateLanguageModelCommand };
//# sourceMappingURL=CreateLanguageModelCommand.js.map