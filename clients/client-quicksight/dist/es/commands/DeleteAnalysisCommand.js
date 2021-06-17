import { __extends } from "tslib";
import { DeleteAnalysisRequest, DeleteAnalysisResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteAnalysisCommand, serializeAws_restJson1DeleteAnalysisCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an analysis from Amazon QuickSight. You can optionally include a recovery window during
 *             which you can restore the analysis. If you don't specify a recovery window value, the
 *             operation defaults to 30 days. QuickSight attaches a <code>DeletionTime</code> stamp to
 *             the response that specifies the end of the recovery window. At the end of the recovery
 *             window, QuickSight deletes the analysis permanently.</p>
 *         <p>At any time before recovery window ends, you can use the <code>RestoreAnalysis</code>
 *             API operation to remove the <code>DeletionTime</code> stamp and cancel the deletion of
 *             the analysis. The analysis remains visible in the API until it's deleted, so you can
 *             describe it but you can't make a template from it.</p>
 *         <p>An analysis that's scheduled for deletion isn't accessible in the QuickSight console.
 *             To access it in the console, restore it. Deleting an analysis doesn't delete the
 *             dashboards that you publish from it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteAnalysisCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteAnalysisCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAnalysisCommandInput} for command's `input` shape.
 * @see {@link DeleteAnalysisCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAnalysisCommand = /** @class */ (function (_super) {
    __extends(DeleteAnalysisCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAnalysisCommand(input) {
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
    DeleteAnalysisCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DeleteAnalysisCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAnalysisRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAnalysisResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAnalysisCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteAnalysisCommand(input, context);
    };
    DeleteAnalysisCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteAnalysisCommand(output, context);
    };
    return DeleteAnalysisCommand;
}($Command));
export { DeleteAnalysisCommand };
//# sourceMappingURL=DeleteAnalysisCommand.js.map