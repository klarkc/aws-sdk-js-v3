import { __extends } from "tslib";
import { GetPlatformApplicationAttributesInput, GetPlatformApplicationAttributesResponse } from "../models/models_0";
import { deserializeAws_queryGetPlatformApplicationAttributesCommand, serializeAws_queryGetPlatformApplicationAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the attributes of the platform application object for the supported push
 *             notification services, such as APNS and GCM (Firebase Cloud Messaging). For more
 *             information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetPlatformApplicationAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetPlatformApplicationAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new GetPlatformApplicationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPlatformApplicationAttributesCommandInput} for command's `input` shape.
 * @see {@link GetPlatformApplicationAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPlatformApplicationAttributesCommand = /** @class */ (function (_super) {
    __extends(GetPlatformApplicationAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPlatformApplicationAttributesCommand(input) {
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
    GetPlatformApplicationAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "GetPlatformApplicationAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPlatformApplicationAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetPlatformApplicationAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPlatformApplicationAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetPlatformApplicationAttributesCommand(input, context);
    };
    GetPlatformApplicationAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetPlatformApplicationAttributesCommand(output, context);
    };
    return GetPlatformApplicationAttributesCommand;
}($Command));
export { GetPlatformApplicationAttributesCommand };
//# sourceMappingURL=GetPlatformApplicationAttributesCommand.js.map