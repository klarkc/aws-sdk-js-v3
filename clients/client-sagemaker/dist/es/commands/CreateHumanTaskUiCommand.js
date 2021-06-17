import { __extends } from "tslib";
import { CreateHumanTaskUiRequest, CreateHumanTaskUiResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateHumanTaskUiCommand, serializeAws_json1_1CreateHumanTaskUiCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateHumanTaskUiCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateHumanTaskUiCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateHumanTaskUiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHumanTaskUiCommandInput} for command's `input` shape.
 * @see {@link CreateHumanTaskUiCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateHumanTaskUiCommand = /** @class */ (function (_super) {
    __extends(CreateHumanTaskUiCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateHumanTaskUiCommand(input) {
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
    CreateHumanTaskUiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateHumanTaskUiCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateHumanTaskUiRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateHumanTaskUiResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateHumanTaskUiCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateHumanTaskUiCommand(input, context);
    };
    CreateHumanTaskUiCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateHumanTaskUiCommand(output, context);
    };
    return CreateHumanTaskUiCommand;
}($Command));
export { CreateHumanTaskUiCommand };
//# sourceMappingURL=CreateHumanTaskUiCommand.js.map