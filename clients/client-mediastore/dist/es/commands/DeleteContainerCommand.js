import { __extends } from "tslib";
import { DeleteContainerInput, DeleteContainerOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteContainerCommand, serializeAws_json1_1DeleteContainerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified container. Before you make a <code>DeleteContainer</code>
 *          request, delete any objects in the container or in any folders in the container. You can
 *          delete only empty containers. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteContainerCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DeleteContainerCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new DeleteContainerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContainerCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteContainerCommand = /** @class */ (function (_super) {
    __extends(DeleteContainerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteContainerCommand(input) {
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
    DeleteContainerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreClient";
        var commandName = "DeleteContainerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteContainerInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteContainerOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteContainerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteContainerCommand(input, context);
    };
    DeleteContainerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteContainerCommand(output, context);
    };
    return DeleteContainerCommand;
}($Command));
export { DeleteContainerCommand };
//# sourceMappingURL=DeleteContainerCommand.js.map