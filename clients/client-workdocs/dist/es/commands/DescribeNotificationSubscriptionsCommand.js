import { __extends } from "tslib";
import { DescribeNotificationSubscriptionsRequest, DescribeNotificationSubscriptionsResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeNotificationSubscriptionsCommand, serializeAws_restJson1DescribeNotificationSubscriptionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the specified notification subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeNotificationSubscriptionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeNotificationSubscriptionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeNotificationSubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNotificationSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNotificationSubscriptionsCommand = /** @class */ (function (_super) {
    __extends(DescribeNotificationSubscriptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNotificationSubscriptionsCommand(input) {
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
    DescribeNotificationSubscriptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "DescribeNotificationSubscriptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNotificationSubscriptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNotificationSubscriptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNotificationSubscriptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeNotificationSubscriptionsCommand(input, context);
    };
    DescribeNotificationSubscriptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeNotificationSubscriptionsCommand(output, context);
    };
    return DescribeNotificationSubscriptionsCommand;
}($Command));
export { DescribeNotificationSubscriptionsCommand };
//# sourceMappingURL=DescribeNotificationSubscriptionsCommand.js.map