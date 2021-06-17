import { __extends } from "tslib";
import { UpdateArtifactRequest, UpdateArtifactResponse } from "../models/models_2";
import { deserializeAws_json1_1UpdateArtifactCommand, serializeAws_json1_1UpdateArtifactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateArtifactCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateArtifactCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateArtifactCommandInput} for command's `input` shape.
 * @see {@link UpdateArtifactCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateArtifactCommand = /** @class */ (function (_super) {
    __extends(UpdateArtifactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateArtifactCommand(input) {
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
    UpdateArtifactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateArtifactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateArtifactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateArtifactResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateArtifactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateArtifactCommand(input, context);
    };
    UpdateArtifactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateArtifactCommand(output, context);
    };
    return UpdateArtifactCommand;
}($Command));
export { UpdateArtifactCommand };
//# sourceMappingURL=UpdateArtifactCommand.js.map