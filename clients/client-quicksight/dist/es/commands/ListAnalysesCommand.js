import { __extends } from "tslib";
import { ListAnalysesRequest, ListAnalysesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAnalysesCommand, serializeAws_restJson1ListAnalysesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists Amazon QuickSight analyses that exist in the specified AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListAnalysesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListAnalysesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListAnalysesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnalysesCommandInput} for command's `input` shape.
 * @see {@link ListAnalysesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAnalysesCommand = /** @class */ (function (_super) {
    __extends(ListAnalysesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAnalysesCommand(input) {
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
    ListAnalysesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "ListAnalysesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAnalysesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAnalysesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAnalysesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAnalysesCommand(input, context);
    };
    ListAnalysesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAnalysesCommand(output, context);
    };
    return ListAnalysesCommand;
}($Command));
export { ListAnalysesCommand };
//# sourceMappingURL=ListAnalysesCommand.js.map