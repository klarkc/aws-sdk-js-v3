import { __extends } from "tslib";
import { CancelReservedInstancesListingRequest, CancelReservedInstancesListingResult } from "../models/models_0";
import { deserializeAws_ec2CancelReservedInstancesListingCommand, serializeAws_ec2CancelReservedInstancesListingCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels the specified Reserved Instance listing in the Reserved Instance Marketplace.</p>
 *          <p>For more information, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
 *         in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelReservedInstancesListingCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelReservedInstancesListingCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelReservedInstancesListingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelReservedInstancesListingCommandInput} for command's `input` shape.
 * @see {@link CancelReservedInstancesListingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelReservedInstancesListingCommand = /** @class */ (function (_super) {
    __extends(CancelReservedInstancesListingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelReservedInstancesListingCommand(input) {
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
    CancelReservedInstancesListingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CancelReservedInstancesListingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelReservedInstancesListingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelReservedInstancesListingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelReservedInstancesListingCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CancelReservedInstancesListingCommand(input, context);
    };
    CancelReservedInstancesListingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CancelReservedInstancesListingCommand(output, context);
    };
    return CancelReservedInstancesListingCommand;
}($Command));
export { CancelReservedInstancesListingCommand };
//# sourceMappingURL=CancelReservedInstancesListingCommand.js.map