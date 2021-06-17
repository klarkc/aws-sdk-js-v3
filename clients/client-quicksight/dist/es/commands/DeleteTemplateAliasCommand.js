import { __extends } from "tslib";
import { DeleteTemplateAliasRequest, DeleteTemplateAliasResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteTemplateAliasCommand, serializeAws_restJson1DeleteTemplateAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the item that the specified template alias points to. If you provide a specific
 * 			alias, you delete the version of the template that the alias points to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteTemplateAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteTemplateAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteTemplateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTemplateAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteTemplateAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTemplateAliasCommand = /** @class */ (function (_super) {
    __extends(DeleteTemplateAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTemplateAliasCommand(input) {
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
    DeleteTemplateAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DeleteTemplateAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTemplateAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTemplateAliasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTemplateAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteTemplateAliasCommand(input, context);
    };
    DeleteTemplateAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteTemplateAliasCommand(output, context);
    };
    return DeleteTemplateAliasCommand;
}($Command));
export { DeleteTemplateAliasCommand };
//# sourceMappingURL=DeleteTemplateAliasCommand.js.map