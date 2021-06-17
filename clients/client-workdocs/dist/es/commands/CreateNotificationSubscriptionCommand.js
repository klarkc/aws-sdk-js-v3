import { __extends } from "tslib";
import { CreateNotificationSubscriptionRequest, CreateNotificationSubscriptionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateNotificationSubscriptionCommand, serializeAws_restJson1CreateNotificationSubscriptionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configure Amazon WorkDocs to use Amazon SNS notifications. The endpoint receives a
 *             confirmation message, and must confirm the subscription.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/subscribe-notifications.html">Subscribe to
 *                 Notifications</a> in the <i>Amazon WorkDocs Developer
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateNotificationSubscriptionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateNotificationSubscriptionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new CreateNotificationSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNotificationSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateNotificationSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNotificationSubscriptionCommand = /** @class */ (function (_super) {
    __extends(CreateNotificationSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateNotificationSubscriptionCommand(input) {
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
    CreateNotificationSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "CreateNotificationSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateNotificationSubscriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateNotificationSubscriptionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateNotificationSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateNotificationSubscriptionCommand(input, context);
    };
    CreateNotificationSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateNotificationSubscriptionCommand(output, context);
    };
    return CreateNotificationSubscriptionCommand;
}($Command));
export { CreateNotificationSubscriptionCommand };
//# sourceMappingURL=CreateNotificationSubscriptionCommand.js.map