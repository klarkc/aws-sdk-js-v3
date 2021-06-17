"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeSpotFleetRequestHistoryCommand = void 0;
const models_3_1 = require("../models/models_3");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the events for the specified Spot Fleet request during the specified time.</p>
 *          <p>Spot Fleet events are delayed by up to 30 seconds before they can be described. This ensures that you can query
 *           by the last evaluated time and not miss a recorded event. Spot Fleet events are available for 48 hours.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotFleetRequestHistoryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotFleetRequestHistoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotFleetRequestHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotFleetRequestHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotFleetRequestHistoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeSpotFleetRequestHistoryCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeSpotFleetRequestHistoryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_3_1.DescribeSpotFleetRequestHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_3_1.DescribeSpotFleetRequestHistoryResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DescribeSpotFleetRequestHistoryCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DescribeSpotFleetRequestHistoryCommand(output, context);
    }
}
exports.DescribeSpotFleetRequestHistoryCommand = DescribeSpotFleetRequestHistoryCommand;
//# sourceMappingURL=DescribeSpotFleetRequestHistoryCommand.js.map