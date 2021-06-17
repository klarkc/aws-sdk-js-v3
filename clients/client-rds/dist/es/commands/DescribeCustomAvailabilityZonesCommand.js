import { __extends } from "tslib";
import { CustomAvailabilityZoneMessage, DescribeCustomAvailabilityZonesMessage } from "../models/models_0";
import { deserializeAws_queryDescribeCustomAvailabilityZonesCommand, serializeAws_queryDescribeCustomAvailabilityZonesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about custom Availability Zones (AZs).</p>
 *         <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
 *         <p>For more information about RDS on VMware, see the
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
 *                 RDS on VMware User Guide.</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeCustomAvailabilityZonesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeCustomAvailabilityZonesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeCustomAvailabilityZonesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomAvailabilityZonesCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomAvailabilityZonesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCustomAvailabilityZonesCommand = /** @class */ (function (_super) {
    __extends(DescribeCustomAvailabilityZonesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCustomAvailabilityZonesCommand(input) {
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
    DescribeCustomAvailabilityZonesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeCustomAvailabilityZonesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCustomAvailabilityZonesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CustomAvailabilityZoneMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCustomAvailabilityZonesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeCustomAvailabilityZonesCommand(input, context);
    };
    DescribeCustomAvailabilityZonesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeCustomAvailabilityZonesCommand(output, context);
    };
    return DescribeCustomAvailabilityZonesCommand;
}($Command));
export { DescribeCustomAvailabilityZonesCommand };
//# sourceMappingURL=DescribeCustomAvailabilityZonesCommand.js.map