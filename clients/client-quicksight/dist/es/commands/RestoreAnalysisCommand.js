import { __extends } from "tslib";
import { RestoreAnalysisRequest, RestoreAnalysisResponse } from "../models/models_1";
import { deserializeAws_restJson1RestoreAnalysisCommand, serializeAws_restJson1RestoreAnalysisCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restores an analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, RestoreAnalysisCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, RestoreAnalysisCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new RestoreAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreAnalysisCommandInput} for command's `input` shape.
 * @see {@link RestoreAnalysisCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestoreAnalysisCommand = /** @class */ (function (_super) {
    __extends(RestoreAnalysisCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestoreAnalysisCommand(input) {
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
    RestoreAnalysisCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "RestoreAnalysisCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestoreAnalysisRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RestoreAnalysisResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestoreAnalysisCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RestoreAnalysisCommand(input, context);
    };
    RestoreAnalysisCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RestoreAnalysisCommand(output, context);
    };
    return RestoreAnalysisCommand;
}($Command));
export { RestoreAnalysisCommand };
//# sourceMappingURL=RestoreAnalysisCommand.js.map