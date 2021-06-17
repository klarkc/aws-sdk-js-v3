import { __extends } from "tslib";
import { DisableMacieRequest, DisableMacieResponse } from "../models/models_0";
import { deserializeAws_restJson1DisableMacieCommand, serializeAws_restJson1DisableMacieCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables an Amazon Macie account and deletes Macie resources for the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DisableMacieCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DisableMacieCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DisableMacieCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableMacieCommandInput} for command's `input` shape.
 * @see {@link DisableMacieCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableMacieCommand = /** @class */ (function (_super) {
    __extends(DisableMacieCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableMacieCommand(input) {
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
    DisableMacieCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "DisableMacieCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableMacieRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableMacieResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableMacieCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisableMacieCommand(input, context);
    };
    DisableMacieCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisableMacieCommand(output, context);
    };
    return DisableMacieCommand;
}($Command));
export { DisableMacieCommand };
//# sourceMappingURL=DisableMacieCommand.js.map