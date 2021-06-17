import { __extends } from "tslib";
import { ListThemeVersionsRequest, ListThemeVersionsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListThemeVersionsCommand, serializeAws_restJson1ListThemeVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the versions of the themes in the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListThemeVersionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListThemeVersionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListThemeVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThemeVersionsCommandInput} for command's `input` shape.
 * @see {@link ListThemeVersionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListThemeVersionsCommand = /** @class */ (function (_super) {
    __extends(ListThemeVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListThemeVersionsCommand(input) {
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
    ListThemeVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "ListThemeVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListThemeVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListThemeVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListThemeVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListThemeVersionsCommand(input, context);
    };
    ListThemeVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListThemeVersionsCommand(output, context);
    };
    return ListThemeVersionsCommand;
}($Command));
export { ListThemeVersionsCommand };
//# sourceMappingURL=ListThemeVersionsCommand.js.map