import { __extends } from "tslib";
import { ListTemplateAliasesRequest, ListTemplateAliasesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListTemplateAliasesCommand, serializeAws_restJson1ListTemplateAliasesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the aliases of a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListTemplateAliasesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListTemplateAliasesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListTemplateAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTemplateAliasesCommandInput} for command's `input` shape.
 * @see {@link ListTemplateAliasesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTemplateAliasesCommand = /** @class */ (function (_super) {
    __extends(ListTemplateAliasesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTemplateAliasesCommand(input) {
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
    ListTemplateAliasesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "ListTemplateAliasesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTemplateAliasesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTemplateAliasesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTemplateAliasesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTemplateAliasesCommand(input, context);
    };
    ListTemplateAliasesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTemplateAliasesCommand(output, context);
    };
    return ListTemplateAliasesCommand;
}($Command));
export { ListTemplateAliasesCommand };
//# sourceMappingURL=ListTemplateAliasesCommand.js.map