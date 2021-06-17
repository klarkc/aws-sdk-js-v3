"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeInstanceTypeOfferingsCommand = void 0;
const models_2_1 = require("../models/models_2");
const models_3_1 = require("../models/models_3");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of all instance types offered. The results can be filtered by location (Region or Availability
 *    Zone). If no location is specified, the instance types offered in the current Region are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceTypeOfferingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceTypeOfferingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceTypeOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceTypeOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceTypeOfferingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeInstanceTypeOfferingsCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeInstanceTypeOfferingsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.DescribeInstanceTypeOfferingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_3_1.DescribeInstanceTypeOfferingsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DescribeInstanceTypeOfferingsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DescribeInstanceTypeOfferingsCommand(output, context);
    }
}
exports.DescribeInstanceTypeOfferingsCommand = DescribeInstanceTypeOfferingsCommand;
//# sourceMappingURL=DescribeInstanceTypeOfferingsCommand.js.map