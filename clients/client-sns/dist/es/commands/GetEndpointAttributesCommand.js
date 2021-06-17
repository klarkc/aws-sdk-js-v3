import { __extends } from "tslib";
import { GetEndpointAttributesInput, GetEndpointAttributesResponse } from "../models/models_0";
import { deserializeAws_queryGetEndpointAttributesCommand, serializeAws_queryGetEndpointAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the endpoint attributes for a device on one of the supported push
 *             notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more
 *             information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetEndpointAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetEndpointAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new GetEndpointAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEndpointAttributesCommandInput} for command's `input` shape.
 * @see {@link GetEndpointAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEndpointAttributesCommand = /** @class */ (function (_super) {
    __extends(GetEndpointAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEndpointAttributesCommand(input) {
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
    GetEndpointAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "GetEndpointAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEndpointAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetEndpointAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEndpointAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetEndpointAttributesCommand(input, context);
    };
    GetEndpointAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetEndpointAttributesCommand(output, context);
    };
    return GetEndpointAttributesCommand;
}($Command));
export { GetEndpointAttributesCommand };
//# sourceMappingURL=GetEndpointAttributesCommand.js.map