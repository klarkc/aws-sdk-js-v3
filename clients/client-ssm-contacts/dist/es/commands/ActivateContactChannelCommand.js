import { __extends } from "tslib";
import { ActivateContactChannelRequest, ActivateContactChannelResult } from "../models/models_0";
import { deserializeAws_json1_1ActivateContactChannelCommand, serializeAws_json1_1ActivateContactChannelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Activates a contact's contact channel. Incident Manager can't engage a contact until
 *          the
 *          contact channel has been activated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ActivateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ActivateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ActivateContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateContactChannelCommandInput} for command's `input` shape.
 * @see {@link ActivateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ActivateContactChannelCommand = /** @class */ (function (_super) {
    __extends(ActivateContactChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ActivateContactChannelCommand(input) {
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
    ActivateContactChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "ActivateContactChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ActivateContactChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ActivateContactChannelResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ActivateContactChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ActivateContactChannelCommand(input, context);
    };
    ActivateContactChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ActivateContactChannelCommand(output, context);
    };
    return ActivateContactChannelCommand;
}($Command));
export { ActivateContactChannelCommand };
//# sourceMappingURL=ActivateContactChannelCommand.js.map