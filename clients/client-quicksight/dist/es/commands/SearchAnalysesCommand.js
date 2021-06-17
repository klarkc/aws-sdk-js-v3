import { __extends } from "tslib";
import { SearchAnalysesRequest, SearchAnalysesResponse } from "../models/models_1";
import { deserializeAws_restJson1SearchAnalysesCommand, serializeAws_restJson1SearchAnalysesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches for analyses that belong to the user specified in the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchAnalysesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchAnalysesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new SearchAnalysesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchAnalysesCommandInput} for command's `input` shape.
 * @see {@link SearchAnalysesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchAnalysesCommand = /** @class */ (function (_super) {
    __extends(SearchAnalysesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchAnalysesCommand(input) {
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
    SearchAnalysesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "SearchAnalysesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchAnalysesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchAnalysesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchAnalysesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SearchAnalysesCommand(input, context);
    };
    SearchAnalysesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SearchAnalysesCommand(output, context);
    };
    return SearchAnalysesCommand;
}($Command));
export { SearchAnalysesCommand };
//# sourceMappingURL=SearchAnalysesCommand.js.map