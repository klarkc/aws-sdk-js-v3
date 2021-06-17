import { __extends } from "tslib";
import { ListThemeAliasesRequest, ListThemeAliasesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListThemeAliasesCommand, serializeAws_restJson1ListThemeAliasesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the aliases of a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListThemeAliasesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListThemeAliasesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListThemeAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThemeAliasesCommandInput} for command's `input` shape.
 * @see {@link ListThemeAliasesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListThemeAliasesCommand = /** @class */ (function (_super) {
    __extends(ListThemeAliasesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListThemeAliasesCommand(input) {
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
    ListThemeAliasesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "ListThemeAliasesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListThemeAliasesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListThemeAliasesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListThemeAliasesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListThemeAliasesCommand(input, context);
    };
    ListThemeAliasesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListThemeAliasesCommand(output, context);
    };
    return ListThemeAliasesCommand;
}($Command));
export { ListThemeAliasesCommand };
//# sourceMappingURL=ListThemeAliasesCommand.js.map