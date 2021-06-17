import { __extends } from "tslib";
import { UpdateFindingsRequest, UpdateFindingsResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateFindingsCommand, serializeAws_restJson1UpdateFindingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <code>UpdateFindings</code> is deprecated. Instead of <code>UpdateFindings</code>, use
 *             <code>BatchUpdateFindings</code>.</p>
 *          <p>Updates the <code>Note</code> and <code>RecordState</code> of the Security Hub-aggregated
 *          findings that the filter attributes specify. Any member account that can view the finding
 *          also sees the update to the finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateFindingsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateFindingsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new UpdateFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFindingsCommandInput} for command's `input` shape.
 * @see {@link UpdateFindingsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFindingsCommand = /** @class */ (function (_super) {
    __extends(UpdateFindingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFindingsCommand(input) {
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
    UpdateFindingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "UpdateFindingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFindingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFindingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFindingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateFindingsCommand(input, context);
    };
    UpdateFindingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateFindingsCommand(output, context);
    };
    return UpdateFindingsCommand;
}($Command));
export { UpdateFindingsCommand };
//# sourceMappingURL=UpdateFindingsCommand.js.map