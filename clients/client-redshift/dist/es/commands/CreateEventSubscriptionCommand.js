import { __extends } from "tslib";
import { CreateEventSubscriptionMessage, CreateEventSubscriptionResult } from "../models/models_0";
import { deserializeAws_queryCreateEventSubscriptionCommand, serializeAws_queryCreateEventSubscriptionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon Redshift event notification subscription. This action requires an ARN
 *             (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console,
 *             the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you
 *             must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in
 *             the SNS console.</p>
 *         <p>You can specify the source type, and lists of Amazon Redshift source IDs, event
 *             categories, and event severities. Notifications will be sent for all events you want
 *             that match those criteria. For example, you can specify source type = cluster, source ID
 *             = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity =
 *             ERROR. The subscription will only send notifications for those ERROR events in the
 *             Availability and Backup categories for the specified clusters.</p>
 *         <p>If you specify both the source type and source IDs, such as source type = cluster
 *             and source identifier = my-cluster-1, notifications will be sent for all the cluster
 *             events for my-cluster-1. If you specify a source type but do not specify a source
 *             identifier, you will receive notice of the events for the objects of that type in your
 *             AWS account. If you do not specify either the SourceType nor the SourceIdentifier, you
 *             will be notified of events generated from all Amazon Redshift sources belonging to your AWS
 *             account. You must specify a source type if you specify a source ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateEventSubscriptionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateEventSubscriptionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateEventSubscriptionCommand = /** @class */ (function (_super) {
    __extends(CreateEventSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateEventSubscriptionCommand(input) {
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
    CreateEventSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "CreateEventSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateEventSubscriptionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateEventSubscriptionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateEventSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateEventSubscriptionCommand(input, context);
    };
    CreateEventSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateEventSubscriptionCommand(output, context);
    };
    return CreateEventSubscriptionCommand;
}($Command));
export { CreateEventSubscriptionCommand };
//# sourceMappingURL=CreateEventSubscriptionCommand.js.map