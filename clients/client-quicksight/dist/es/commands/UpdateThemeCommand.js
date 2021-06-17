import { __extends } from "tslib";
import { UpdateThemeRequest, UpdateThemeResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateThemeCommand, serializeAws_restJson1UpdateThemeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateThemeCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateThemeCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateThemeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThemeCommandInput} for command's `input` shape.
 * @see {@link UpdateThemeCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateThemeCommand = /** @class */ (function (_super) {
    __extends(UpdateThemeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateThemeCommand(input) {
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
    UpdateThemeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "UpdateThemeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateThemeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateThemeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateThemeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateThemeCommand(input, context);
    };
    UpdateThemeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateThemeCommand(output, context);
    };
    return UpdateThemeCommand;
}($Command));
export { UpdateThemeCommand };
//# sourceMappingURL=UpdateThemeCommand.js.map