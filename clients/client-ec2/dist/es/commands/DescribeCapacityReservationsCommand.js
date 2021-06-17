import { __extends } from "tslib";
import { DescribeCapacityReservationsRequest, DescribeCapacityReservationsResult } from "../models/models_2";
import { deserializeAws_ec2DescribeCapacityReservationsCommand, serializeAws_ec2DescribeCapacityReservationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your Capacity Reservations. The results describe only the Capacity Reservations in the AWS
 * 			Region that you're currently using.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCapacityReservationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCapacityReservationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeCapacityReservationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCapacityReservationsCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityReservationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCapacityReservationsCommand = /** @class */ (function (_super) {
    __extends(DescribeCapacityReservationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCapacityReservationsCommand(input) {
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
    DescribeCapacityReservationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeCapacityReservationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCapacityReservationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCapacityReservationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCapacityReservationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeCapacityReservationsCommand(input, context);
    };
    DescribeCapacityReservationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeCapacityReservationsCommand(output, context);
    };
    return DescribeCapacityReservationsCommand;
}($Command));
export { DescribeCapacityReservationsCommand };
//# sourceMappingURL=DescribeCapacityReservationsCommand.js.map