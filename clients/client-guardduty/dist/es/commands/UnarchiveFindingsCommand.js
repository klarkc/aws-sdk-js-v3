import { __extends } from "tslib";
import { UnarchiveFindingsRequest, UnarchiveFindingsResponse } from "../models/models_0";
import { deserializeAws_restJson1UnarchiveFindingsCommand, serializeAws_restJson1UnarchiveFindingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Unarchives GuardDuty findings specified by the <code>findingIds</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UnarchiveFindingsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UnarchiveFindingsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UnarchiveFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnarchiveFindingsCommandInput} for command's `input` shape.
 * @see {@link UnarchiveFindingsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UnarchiveFindingsCommand = /** @class */ (function (_super) {
    __extends(UnarchiveFindingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UnarchiveFindingsCommand(input) {
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
    UnarchiveFindingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "UnarchiveFindingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnarchiveFindingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UnarchiveFindingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnarchiveFindingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UnarchiveFindingsCommand(input, context);
    };
    UnarchiveFindingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UnarchiveFindingsCommand(output, context);
    };
    return UnarchiveFindingsCommand;
}($Command));
export { UnarchiveFindingsCommand };
//# sourceMappingURL=UnarchiveFindingsCommand.js.map