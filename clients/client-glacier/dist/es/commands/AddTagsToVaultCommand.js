import { __extends } from "tslib";
import { AddTagsToVaultInput } from "../models/models_0";
import { deserializeAws_restJson1AddTagsToVaultCommand, serializeAws_restJson1AddTagsToVaultCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation adds the specified tags to a vault. Each tag is composed of a key and
 *          a value. Each vault can have up to 10 tags. If your request would cause the tag limit for
 *          the vault to be exceeded, the operation throws the <code>LimitExceededException</code>
 *          error. If a tag already exists on the vault under a specified key, the existing key value
 *          will be overwritten. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, AddTagsToVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, AddTagsToVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new AddTagsToVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToVaultCommandInput} for command's `input` shape.
 * @see {@link AddTagsToVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddTagsToVaultCommand = /** @class */ (function (_super) {
    __extends(AddTagsToVaultCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddTagsToVaultCommand(input) {
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
    AddTagsToVaultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "AddTagsToVaultCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddTagsToVaultInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddTagsToVaultCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AddTagsToVaultCommand(input, context);
    };
    AddTagsToVaultCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AddTagsToVaultCommand(output, context);
    };
    return AddTagsToVaultCommand;
}($Command));
export { AddTagsToVaultCommand };
//# sourceMappingURL=AddTagsToVaultCommand.js.map