import { __extends } from "tslib";
import { DeleteLifecyclePolicyInput, DeleteLifecyclePolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteLifecyclePolicyCommand, serializeAws_json1_1DeleteLifecyclePolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteLifecyclePolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DeleteLifecyclePolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new DeleteLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLifecyclePolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteLifecyclePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLifecyclePolicyCommand(input) {
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
    DeleteLifecyclePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreClient";
        var commandName = "DeleteLifecyclePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLifecyclePolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLifecyclePolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLifecyclePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteLifecyclePolicyCommand(input, context);
    };
    DeleteLifecyclePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteLifecyclePolicyCommand(output, context);
    };
    return DeleteLifecyclePolicyCommand;
}($Command));
export { DeleteLifecyclePolicyCommand };
//# sourceMappingURL=DeleteLifecyclePolicyCommand.js.map