import { __extends } from "tslib";
import { UpdateThemeAliasRequest, UpdateThemeAliasResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateThemeAliasCommand, serializeAws_restJson1UpdateThemeAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an alias of a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateThemeAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateThemeAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateThemeAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThemeAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateThemeAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateThemeAliasCommand = /** @class */ (function (_super) {
    __extends(UpdateThemeAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateThemeAliasCommand(input) {
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
    UpdateThemeAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "UpdateThemeAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateThemeAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateThemeAliasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateThemeAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateThemeAliasCommand(input, context);
    };
    UpdateThemeAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateThemeAliasCommand(output, context);
    };
    return UpdateThemeAliasCommand;
}($Command));
export { UpdateThemeAliasCommand };
//# sourceMappingURL=UpdateThemeAliasCommand.js.map