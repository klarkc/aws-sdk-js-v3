import { __extends } from "tslib";
import { PutChannelPolicyRequest, PutChannelPolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1PutChannelPolicyCommand, serializeAws_restJson1PutChannelPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an IAM policy for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, PutChannelPolicyCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, PutChannelPolicyCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new PutChannelPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutChannelPolicyCommandInput} for command's `input` shape.
 * @see {@link PutChannelPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutChannelPolicyCommand = /** @class */ (function (_super) {
    __extends(PutChannelPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutChannelPolicyCommand(input) {
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
    PutChannelPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "PutChannelPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutChannelPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutChannelPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutChannelPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutChannelPolicyCommand(input, context);
    };
    PutChannelPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutChannelPolicyCommand(output, context);
    };
    return PutChannelPolicyCommand;
}($Command));
export { PutChannelPolicyCommand };
//# sourceMappingURL=PutChannelPolicyCommand.js.map