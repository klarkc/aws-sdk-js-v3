import { __extends } from "tslib";
import { ListTagsForVaultInput, ListTagsForVaultOutput } from "../models/models_0";
import { deserializeAws_restJson1ListTagsForVaultCommand, serializeAws_restJson1ListTagsForVaultCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation lists all the tags attached to a vault. The operation returns an empty
 *          map if there are no tags. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier
 *          Resources</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListTagsForVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListTagsForVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new ListTagsForVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForVaultCommandInput} for command's `input` shape.
 * @see {@link ListTagsForVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTagsForVaultCommand = /** @class */ (function (_super) {
    __extends(ListTagsForVaultCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTagsForVaultCommand(input) {
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
    ListTagsForVaultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "ListTagsForVaultCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTagsForVaultInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListTagsForVaultOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTagsForVaultCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTagsForVaultCommand(input, context);
    };
    ListTagsForVaultCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTagsForVaultCommand(output, context);
    };
    return ListTagsForVaultCommand;
}($Command));
export { ListTagsForVaultCommand };
//# sourceMappingURL=ListTagsForVaultCommand.js.map