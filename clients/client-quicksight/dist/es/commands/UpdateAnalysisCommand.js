import { __extends } from "tslib";
import { UpdateAnalysisRequest, UpdateAnalysisResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateAnalysisCommand, serializeAws_restJson1UpdateAnalysisCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an analysis in Amazon QuickSight</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateAnalysisCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateAnalysisCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAnalysisCommandInput} for command's `input` shape.
 * @see {@link UpdateAnalysisCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAnalysisCommand = /** @class */ (function (_super) {
    __extends(UpdateAnalysisCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAnalysisCommand(input) {
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
    UpdateAnalysisCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "UpdateAnalysisCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAnalysisRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAnalysisResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAnalysisCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAnalysisCommand(input, context);
    };
    UpdateAnalysisCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAnalysisCommand(output, context);
    };
    return UpdateAnalysisCommand;
}($Command));
export { UpdateAnalysisCommand };
//# sourceMappingURL=UpdateAnalysisCommand.js.map