import { __extends } from "tslib";
import { RemoveTagsFromVaultInput } from "../models/models_0";
import { deserializeAws_restJson1RemoveTagsFromVaultCommand, serializeAws_restJson1RemoveTagsFromVaultCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation removes one or more tags from the set of tags attached to a vault. For
 *          more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>.
 *          This operation is idempotent. The operation will be successful, even if there are no tags
 *          attached to the vault. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, RemoveTagsFromVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, RemoveTagsFromVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new RemoveTagsFromVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTagsFromVaultCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveTagsFromVaultCommand = /** @class */ (function (_super) {
    __extends(RemoveTagsFromVaultCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveTagsFromVaultCommand(input) {
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
    RemoveTagsFromVaultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "RemoveTagsFromVaultCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveTagsFromVaultInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveTagsFromVaultCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RemoveTagsFromVaultCommand(input, context);
    };
    RemoveTagsFromVaultCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RemoveTagsFromVaultCommand(output, context);
    };
    return RemoveTagsFromVaultCommand;
}($Command));
export { RemoveTagsFromVaultCommand };
//# sourceMappingURL=RemoveTagsFromVaultCommand.js.map