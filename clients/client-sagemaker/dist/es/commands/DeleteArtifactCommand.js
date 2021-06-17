import { __extends } from "tslib";
import { DeleteArtifactRequest, DeleteArtifactResponse } from "../models/models_1";
import { deserializeAws_json1_1DeleteArtifactCommand, serializeAws_json1_1DeleteArtifactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an artifact. Either <code>ArtifactArn</code> or <code>Source</code> must be
 *         specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteArtifactCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteArtifactCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteArtifactCommandInput} for command's `input` shape.
 * @see {@link DeleteArtifactCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteArtifactCommand = /** @class */ (function (_super) {
    __extends(DeleteArtifactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteArtifactCommand(input) {
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
    DeleteArtifactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteArtifactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteArtifactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteArtifactResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteArtifactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteArtifactCommand(input, context);
    };
    DeleteArtifactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteArtifactCommand(output, context);
    };
    return DeleteArtifactCommand;
}($Command));
export { DeleteArtifactCommand };
//# sourceMappingURL=DeleteArtifactCommand.js.map