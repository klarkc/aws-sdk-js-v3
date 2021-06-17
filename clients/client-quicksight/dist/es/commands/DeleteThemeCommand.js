import { __extends } from "tslib";
import { DeleteThemeRequest, DeleteThemeResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteThemeCommand, serializeAws_restJson1DeleteThemeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteThemeCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteThemeCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteThemeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThemeCommandInput} for command's `input` shape.
 * @see {@link DeleteThemeCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteThemeCommand = /** @class */ (function (_super) {
    __extends(DeleteThemeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteThemeCommand(input) {
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
    DeleteThemeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DeleteThemeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteThemeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteThemeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteThemeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteThemeCommand(input, context);
    };
    DeleteThemeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteThemeCommand(output, context);
    };
    return DeleteThemeCommand;
}($Command));
export { DeleteThemeCommand };
//# sourceMappingURL=DeleteThemeCommand.js.map