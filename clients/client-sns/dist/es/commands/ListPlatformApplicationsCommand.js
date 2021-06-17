import { __extends } from "tslib";
import { ListPlatformApplicationsInput, ListPlatformApplicationsResponse } from "../models/models_0";
import { deserializeAws_queryListPlatformApplicationsCommand, serializeAws_queryListPlatformApplicationsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the platform application objects for the supported push notification services,
 *             such as APNS and GCM (Firebase Cloud Messaging). The results for
 *                 <code>ListPlatformApplications</code> are paginated and return a limited list of
 *             applications, up to 100. If additional records are available after the first page
 *             results, then a NextToken string will be returned. To receive the next page, you call
 *                 <code>ListPlatformApplications</code> using the NextToken string received from the
 *             previous call. When there are no more records to return, <code>NextToken</code> will be
 *             null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
 *             Notifications</a>. </p>
 *         <p>This action is throttled at 15 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListPlatformApplicationsCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListPlatformApplicationsCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListPlatformApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPlatformApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListPlatformApplicationsCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPlatformApplicationsCommand = /** @class */ (function (_super) {
    __extends(ListPlatformApplicationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPlatformApplicationsCommand(input) {
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
    ListPlatformApplicationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "ListPlatformApplicationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPlatformApplicationsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListPlatformApplicationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPlatformApplicationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListPlatformApplicationsCommand(input, context);
    };
    ListPlatformApplicationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListPlatformApplicationsCommand(output, context);
    };
    return ListPlatformApplicationsCommand;
}($Command));
export { ListPlatformApplicationsCommand };
//# sourceMappingURL=ListPlatformApplicationsCommand.js.map