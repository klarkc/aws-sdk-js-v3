import { __extends } from "tslib";
import { UpdateAnalysisPermissionsRequest, UpdateAnalysisPermissionsResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateAnalysisPermissionsCommand, serializeAws_restJson1UpdateAnalysisPermissionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the read and write permissions for an analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateAnalysisPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateAnalysisPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateAnalysisPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAnalysisPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateAnalysisPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAnalysisPermissionsCommand = /** @class */ (function (_super) {
    __extends(UpdateAnalysisPermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAnalysisPermissionsCommand(input) {
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
    UpdateAnalysisPermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "UpdateAnalysisPermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAnalysisPermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAnalysisPermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAnalysisPermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAnalysisPermissionsCommand(input, context);
    };
    UpdateAnalysisPermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAnalysisPermissionsCommand(output, context);
    };
    return UpdateAnalysisPermissionsCommand;
}($Command));
export { UpdateAnalysisPermissionsCommand };
//# sourceMappingURL=UpdateAnalysisPermissionsCommand.js.map