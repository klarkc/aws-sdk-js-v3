import { __extends } from "tslib";
import { RenderUiTemplateRequest, RenderUiTemplateResponse } from "../models/models_2";
import { deserializeAws_json1_1RenderUiTemplateCommand, serializeAws_json1_1RenderUiTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Renders the UI template so that you can preview the worker's experience. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, RenderUiTemplateCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, RenderUiTemplateCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new RenderUiTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RenderUiTemplateCommandInput} for command's `input` shape.
 * @see {@link RenderUiTemplateCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RenderUiTemplateCommand = /** @class */ (function (_super) {
    __extends(RenderUiTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RenderUiTemplateCommand(input) {
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
    RenderUiTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "RenderUiTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RenderUiTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RenderUiTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RenderUiTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RenderUiTemplateCommand(input, context);
    };
    RenderUiTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RenderUiTemplateCommand(output, context);
    };
    return RenderUiTemplateCommand;
}($Command));
export { RenderUiTemplateCommand };
//# sourceMappingURL=RenderUiTemplateCommand.js.map