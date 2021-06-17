import { __extends } from "tslib";
import { GetChannelPolicyRequest, GetChannelPolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1GetChannelPolicyCommand, serializeAws_restJson1GetChannelPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a channel's IAM policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, GetChannelPolicyCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, GetChannelPolicyCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new GetChannelPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChannelPolicyCommandInput} for command's `input` shape.
 * @see {@link GetChannelPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetChannelPolicyCommand = /** @class */ (function (_super) {
    __extends(GetChannelPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetChannelPolicyCommand(input) {
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
    GetChannelPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "GetChannelPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetChannelPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetChannelPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetChannelPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetChannelPolicyCommand(input, context);
    };
    GetChannelPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetChannelPolicyCommand(output, context);
    };
    return GetChannelPolicyCommand;
}($Command));
export { GetChannelPolicyCommand };
//# sourceMappingURL=GetChannelPolicyCommand.js.map