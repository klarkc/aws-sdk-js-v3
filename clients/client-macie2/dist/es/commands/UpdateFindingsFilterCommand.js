import { __extends } from "tslib";
import { UpdateFindingsFilterRequest, UpdateFindingsFilterResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateFindingsFilterCommand, serializeAws_restJson1UpdateFindingsFilterCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the criteria and other settings for a findings filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateFindingsFilterCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateFindingsFilterCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new UpdateFindingsFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFindingsFilterCommandInput} for command's `input` shape.
 * @see {@link UpdateFindingsFilterCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFindingsFilterCommand = /** @class */ (function (_super) {
    __extends(UpdateFindingsFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFindingsFilterCommand(input) {
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
    UpdateFindingsFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "UpdateFindingsFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFindingsFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFindingsFilterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFindingsFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateFindingsFilterCommand(input, context);
    };
    UpdateFindingsFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateFindingsFilterCommand(output, context);
    };
    return UpdateFindingsFilterCommand;
}($Command));
export { UpdateFindingsFilterCommand };
//# sourceMappingURL=UpdateFindingsFilterCommand.js.map