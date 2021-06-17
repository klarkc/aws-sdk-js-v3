import { __extends } from "tslib";
import { DescribeHostReservationsRequest, DescribeHostReservationsResult } from "../models/models_2";
import { deserializeAws_ec2DescribeHostReservationsCommand, serializeAws_ec2DescribeHostReservationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes reservations that are associated with Dedicated Hosts in your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeHostReservationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeHostReservationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeHostReservationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHostReservationsCommandInput} for command's `input` shape.
 * @see {@link DescribeHostReservationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeHostReservationsCommand = /** @class */ (function (_super) {
    __extends(DescribeHostReservationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeHostReservationsCommand(input) {
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
    DescribeHostReservationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeHostReservationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeHostReservationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeHostReservationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeHostReservationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeHostReservationsCommand(input, context);
    };
    DescribeHostReservationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeHostReservationsCommand(output, context);
    };
    return DescribeHostReservationsCommand;
}($Command));
export { DescribeHostReservationsCommand };
//# sourceMappingURL=DescribeHostReservationsCommand.js.map