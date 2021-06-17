import { __extends } from "tslib";
import { ArchiveFindingsRequest, ArchiveFindingsResponse } from "../models/models_0";
import { deserializeAws_restJson1ArchiveFindingsCommand, serializeAws_restJson1ArchiveFindingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Archives GuardDuty findings that are specified by the list of finding IDs.</p>
 *          <note>
 *             <p>Only the administrator account can archive findings. Member accounts don't have permission to
 *         archive findings from their accounts.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ArchiveFindingsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ArchiveFindingsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ArchiveFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ArchiveFindingsCommandInput} for command's `input` shape.
 * @see {@link ArchiveFindingsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ArchiveFindingsCommand = /** @class */ (function (_super) {
    __extends(ArchiveFindingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ArchiveFindingsCommand(input) {
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
    ArchiveFindingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "ArchiveFindingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ArchiveFindingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ArchiveFindingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ArchiveFindingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ArchiveFindingsCommand(input, context);
    };
    ArchiveFindingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ArchiveFindingsCommand(output, context);
    };
    return ArchiveFindingsCommand;
}($Command));
export { ArchiveFindingsCommand };
//# sourceMappingURL=ArchiveFindingsCommand.js.map