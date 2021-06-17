import { __extends } from "tslib";
import { DeleteAssociationRequest, DeleteAssociationResponse } from "../models/models_1";
import { deserializeAws_json1_1DeleteAssociationCommand, serializeAws_json1_1DeleteAssociationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteAssociationCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteAssociationCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteAssociationCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAssociationCommand = /** @class */ (function (_super) {
    __extends(DeleteAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAssociationCommand(input) {
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
    DeleteAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAssociationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAssociationCommand(input, context);
    };
    DeleteAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAssociationCommand(output, context);
    };
    return DeleteAssociationCommand;
}($Command));
export { DeleteAssociationCommand };
//# sourceMappingURL=DeleteAssociationCommand.js.map