import { __extends } from "tslib";
import { DeactivateContactChannelRequest, DeactivateContactChannelResult } from "../models/models_0";
import { deserializeAws_json1_1DeactivateContactChannelCommand, serializeAws_json1_1DeactivateContactChannelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>To no longer receive Incident Manager engagements to a contact channel, you can deactivate
 *          the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DeactivateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DeactivateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new DeactivateContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeactivateContactChannelCommandInput} for command's `input` shape.
 * @see {@link DeactivateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeactivateContactChannelCommand = /** @class */ (function (_super) {
    __extends(DeactivateContactChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeactivateContactChannelCommand(input) {
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
    DeactivateContactChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "DeactivateContactChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeactivateContactChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeactivateContactChannelResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeactivateContactChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeactivateContactChannelCommand(input, context);
    };
    DeactivateContactChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeactivateContactChannelCommand(output, context);
    };
    return DeactivateContactChannelCommand;
}($Command));
export { DeactivateContactChannelCommand };
//# sourceMappingURL=DeactivateContactChannelCommand.js.map