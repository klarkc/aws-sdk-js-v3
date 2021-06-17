import { __extends } from "tslib";
import { DeleteCorsPolicyInput, DeleteCorsPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteCorsPolicyCommand, serializeAws_json1_1DeleteCorsPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the cross-origin resource sharing (CORS) configuration information that is
 *          set for the container.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission
 *          by default and can grant this permission to others.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteCorsPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DeleteCorsPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new DeleteCorsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCorsPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteCorsPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCorsPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteCorsPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCorsPolicyCommand(input) {
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
    DeleteCorsPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreClient";
        var commandName = "DeleteCorsPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCorsPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCorsPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCorsPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteCorsPolicyCommand(input, context);
    };
    DeleteCorsPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteCorsPolicyCommand(output, context);
    };
    return DeleteCorsPolicyCommand;
}($Command));
export { DeleteCorsPolicyCommand };
//# sourceMappingURL=DeleteCorsPolicyCommand.js.map