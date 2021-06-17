import { __extends } from "tslib";
import { DescribeHostReservationOfferingsRequest, DescribeHostReservationOfferingsResult } from "../models/models_2";
import { deserializeAws_ec2DescribeHostReservationOfferingsCommand, serializeAws_ec2DescribeHostReservationOfferingsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the Dedicated Host reservations that are available to purchase.</p>
 *         <p>The results describe all of the Dedicated Host reservation offerings, including
 * 			offerings that might not match the instance family and Region of your Dedicated Hosts.
 * 			When purchasing an offering, ensure that the instance family and Region of the offering
 * 			matches that of the Dedicated Hosts with which it is to be associated. For more
 * 			information about supported instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated Hosts</a>
 *             in the <i>Amazon EC2 User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeHostReservationOfferingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeHostReservationOfferingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeHostReservationOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHostReservationOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeHostReservationOfferingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeHostReservationOfferingsCommand = /** @class */ (function (_super) {
    __extends(DescribeHostReservationOfferingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeHostReservationOfferingsCommand(input) {
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
    DescribeHostReservationOfferingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeHostReservationOfferingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeHostReservationOfferingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeHostReservationOfferingsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeHostReservationOfferingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeHostReservationOfferingsCommand(input, context);
    };
    DescribeHostReservationOfferingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeHostReservationOfferingsCommand(output, context);
    };
    return DescribeHostReservationOfferingsCommand;
}($Command));
export { DescribeHostReservationOfferingsCommand };
//# sourceMappingURL=DescribeHostReservationOfferingsCommand.js.map