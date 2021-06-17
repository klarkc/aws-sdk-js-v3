import { __extends } from "tslib";
import { DeleteModelPackageGroupInput } from "../models/models_1";
import { deserializeAws_json1_1DeleteModelPackageGroupCommand, serializeAws_json1_1DeleteModelPackageGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified model group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelPackageGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelPackageGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteModelPackageGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteModelPackageGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteModelPackageGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteModelPackageGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteModelPackageGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteModelPackageGroupCommand(input) {
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
    DeleteModelPackageGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteModelPackageGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteModelPackageGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteModelPackageGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteModelPackageGroupCommand(input, context);
    };
    DeleteModelPackageGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteModelPackageGroupCommand(output, context);
    };
    return DeleteModelPackageGroupCommand;
}($Command));
export { DeleteModelPackageGroupCommand };
//# sourceMappingURL=DeleteModelPackageGroupCommand.js.map