import { __extends } from "tslib";
import { DeleteThemeAliasRequest, DeleteThemeAliasResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteThemeAliasCommand, serializeAws_restJson1DeleteThemeAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the version of the theme that the specified theme alias points to.
 * 			If you provide a specific alias, you delete the version of the theme
 * 			that the alias points to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteThemeAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteThemeAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteThemeAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThemeAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteThemeAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteThemeAliasCommand = /** @class */ (function (_super) {
    __extends(DeleteThemeAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteThemeAliasCommand(input) {
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
    DeleteThemeAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DeleteThemeAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteThemeAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteThemeAliasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteThemeAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteThemeAliasCommand(input, context);
    };
    DeleteThemeAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteThemeAliasCommand(output, context);
    };
    return DeleteThemeAliasCommand;
}($Command));
export { DeleteThemeAliasCommand };
//# sourceMappingURL=DeleteThemeAliasCommand.js.map