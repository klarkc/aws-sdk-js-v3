import { __extends } from "tslib";
import { UpdateWorkteamRequest, UpdateWorkteamResponse } from "../models/models_3";
import { deserializeAws_json1_1UpdateWorkteamCommand, serializeAws_json1_1UpdateWorkteamCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing work team with new member definitions or description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateWorkteamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkteamCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateWorkteamCommand = /** @class */ (function (_super) {
    __extends(UpdateWorkteamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateWorkteamCommand(input) {
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
    UpdateWorkteamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateWorkteamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateWorkteamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateWorkteamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateWorkteamCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateWorkteamCommand(input, context);
    };
    UpdateWorkteamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateWorkteamCommand(output, context);
    };
    return UpdateWorkteamCommand;
}($Command));
export { UpdateWorkteamCommand };
//# sourceMappingURL=UpdateWorkteamCommand.js.map