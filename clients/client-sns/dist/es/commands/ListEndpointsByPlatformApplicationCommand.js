import { __extends } from "tslib";
import { ListEndpointsByPlatformApplicationInput, ListEndpointsByPlatformApplicationResponse, } from "../models/models_0";
import { deserializeAws_queryListEndpointsByPlatformApplicationCommand, serializeAws_queryListEndpointsByPlatformApplicationCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the endpoints and endpoint attributes for devices in a supported push
 *             notification service, such as GCM (Firebase Cloud Messaging) and APNS. The results for
 *                 <code>ListEndpointsByPlatformApplication</code> are paginated and return a limited
 *             list of endpoints, up to 100. If additional records are available after the first page
 *             results, then a NextToken string will be returned. To receive the next page, you call
 *                 <code>ListEndpointsByPlatformApplication</code> again using the NextToken string
 *             received from the previous call. When there are no more records to return, NextToken
 *             will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
 *             Notifications</a>. </p>
 *         <p>This action is throttled at 30 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListEndpointsByPlatformApplicationCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListEndpointsByPlatformApplicationCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListEndpointsByPlatformApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEndpointsByPlatformApplicationCommandInput} for command's `input` shape.
 * @see {@link ListEndpointsByPlatformApplicationCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEndpointsByPlatformApplicationCommand = /** @class */ (function (_super) {
    __extends(ListEndpointsByPlatformApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEndpointsByPlatformApplicationCommand(input) {
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
    ListEndpointsByPlatformApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "ListEndpointsByPlatformApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEndpointsByPlatformApplicationInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListEndpointsByPlatformApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEndpointsByPlatformApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListEndpointsByPlatformApplicationCommand(input, context);
    };
    ListEndpointsByPlatformApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListEndpointsByPlatformApplicationCommand(output, context);
    };
    return ListEndpointsByPlatformApplicationCommand;
}($Command));
export { ListEndpointsByPlatformApplicationCommand };
//# sourceMappingURL=ListEndpointsByPlatformApplicationCommand.js.map