import { __extends } from "tslib";
import { UpdateModelPackageInput, UpdateModelPackageOutput } from "../models/models_2";
import { deserializeAws_json1_1UpdateModelPackageCommand, serializeAws_json1_1UpdateModelPackageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a versioned model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateModelPackageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateModelPackageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateModelPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateModelPackageCommandInput} for command's `input` shape.
 * @see {@link UpdateModelPackageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateModelPackageCommand = /** @class */ (function (_super) {
    __extends(UpdateModelPackageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateModelPackageCommand(input) {
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
    UpdateModelPackageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateModelPackageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateModelPackageInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateModelPackageOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateModelPackageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateModelPackageCommand(input, context);
    };
    UpdateModelPackageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateModelPackageCommand(output, context);
    };
    return UpdateModelPackageCommand;
}($Command));
export { UpdateModelPackageCommand };
//# sourceMappingURL=UpdateModelPackageCommand.js.map