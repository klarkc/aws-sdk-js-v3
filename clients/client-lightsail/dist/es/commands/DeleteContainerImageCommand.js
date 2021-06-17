import { __extends } from "tslib";
import { DeleteContainerImageRequest, DeleteContainerImageResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteContainerImageCommand, serializeAws_json1_1DeleteContainerImageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a container image that is registered to your Amazon Lightsail container
 *       service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteContainerImageCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteContainerImageCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteContainerImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContainerImageCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerImageCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteContainerImageCommand = /** @class */ (function (_super) {
    __extends(DeleteContainerImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteContainerImageCommand(input) {
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
    DeleteContainerImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteContainerImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteContainerImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteContainerImageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteContainerImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteContainerImageCommand(input, context);
    };
    DeleteContainerImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteContainerImageCommand(output, context);
    };
    return DeleteContainerImageCommand;
}($Command));
export { DeleteContainerImageCommand };
//# sourceMappingURL=DeleteContainerImageCommand.js.map