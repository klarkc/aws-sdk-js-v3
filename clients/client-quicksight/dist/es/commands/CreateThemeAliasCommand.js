import { __extends } from "tslib";
import { CreateThemeAliasRequest, CreateThemeAliasResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateThemeAliasCommand, serializeAws_restJson1CreateThemeAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a theme alias for a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateThemeAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateThemeAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateThemeAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateThemeAliasCommandInput} for command's `input` shape.
 * @see {@link CreateThemeAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateThemeAliasCommand = /** @class */ (function (_super) {
    __extends(CreateThemeAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateThemeAliasCommand(input) {
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
    CreateThemeAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "CreateThemeAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateThemeAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateThemeAliasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateThemeAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateThemeAliasCommand(input, context);
    };
    CreateThemeAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateThemeAliasCommand(output, context);
    };
    return CreateThemeAliasCommand;
}($Command));
export { CreateThemeAliasCommand };
//# sourceMappingURL=CreateThemeAliasCommand.js.map