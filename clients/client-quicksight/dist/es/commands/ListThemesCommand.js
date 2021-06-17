import { __extends } from "tslib";
import { ListThemesRequest, ListThemesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListThemesCommand, serializeAws_restJson1ListThemesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the themes in the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListThemesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListThemesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListThemesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThemesCommandInput} for command's `input` shape.
 * @see {@link ListThemesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListThemesCommand = /** @class */ (function (_super) {
    __extends(ListThemesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListThemesCommand(input) {
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
    ListThemesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "ListThemesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListThemesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListThemesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListThemesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListThemesCommand(input, context);
    };
    ListThemesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListThemesCommand(output, context);
    };
    return ListThemesCommand;
}($Command));
export { ListThemesCommand };
//# sourceMappingURL=ListThemesCommand.js.map