"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeAvailabilityZonesCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the Availability Zones, Local Zones, and Wavelength Zones that are available to
 *       you. If there is an event impacting a zone, you can use this request to view the state and any
 *       provided messages for that zone.</p>
 *          <p>For more information about Availability Zones, Local Zones, and Wavelength Zones, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html">Regions, Zones and
 *         Outposts</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAvailabilityZonesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAvailabilityZonesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeAvailabilityZonesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAvailabilityZonesCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailabilityZonesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeAvailabilityZonesCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "EC2Client";
        const commandName = "DescribeAvailabilityZonesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.DescribeAvailabilityZonesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.DescribeAvailabilityZonesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DescribeAvailabilityZonesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DescribeAvailabilityZonesCommand(output, context);
    }
}
exports.DescribeAvailabilityZonesCommand = DescribeAvailabilityZonesCommand;
//# sourceMappingURL=DescribeAvailabilityZonesCommand.js.map