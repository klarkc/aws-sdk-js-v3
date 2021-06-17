import { __extends } from "tslib";
import { PurchaseScheduledInstancesRequest, PurchaseScheduledInstancesResult } from "../models/models_4";
import { deserializeAws_ec2PurchaseScheduledInstancesCommand, serializeAws_ec2PurchaseScheduledInstancesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Purchases the Scheduled Instances with the specified schedule.</p>
 *          <p>Scheduled Instances enable you to purchase Amazon EC2 compute capacity by the hour for a one-year term.
 *          Before you can purchase a Scheduled Instance, you must call <a>DescribeScheduledInstanceAvailability</a>
 *          to check for available schedules and obtain a purchase token. After you purchase a Scheduled Instance,
 *          you must call <a>RunScheduledInstances</a> during each scheduled time period.</p>
 *          <p>After you purchase a Scheduled Instance, you can't cancel, modify, or resell your purchase.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, PurchaseScheduledInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, PurchaseScheduledInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new PurchaseScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseScheduledInstancesCommandInput} for command's `input` shape.
 * @see {@link PurchaseScheduledInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PurchaseScheduledInstancesCommand = /** @class */ (function (_super) {
    __extends(PurchaseScheduledInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PurchaseScheduledInstancesCommand(input) {
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
    PurchaseScheduledInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "PurchaseScheduledInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PurchaseScheduledInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PurchaseScheduledInstancesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PurchaseScheduledInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2PurchaseScheduledInstancesCommand(input, context);
    };
    PurchaseScheduledInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2PurchaseScheduledInstancesCommand(output, context);
    };
    return PurchaseScheduledInstancesCommand;
}($Command));
export { PurchaseScheduledInstancesCommand };
//# sourceMappingURL=PurchaseScheduledInstancesCommand.js.map