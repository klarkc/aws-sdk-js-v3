"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTrafficMirrorSessionCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a Traffic Mirror session.</p>
 *          <p>A Traffic Mirror session actively copies packets from a Traffic Mirror source to a Traffic Mirror target. Create a filter, and then assign it
 *          to the session to define a subset of the traffic to mirror, for example all TCP
 *          traffic.</p>
 *          <p>The Traffic Mirror source and the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in a different VPC connected via VPC peering or a transit gateway. </p>
 *          <p>By default, no traffic is mirrored. Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilter.htm">CreateTrafficMirrorFilter</a> to
 *          create filter rules that specify the traffic to mirror.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTrafficMirrorSessionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTrafficMirrorSessionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTrafficMirrorSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrafficMirrorSessionCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficMirrorSessionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateTrafficMirrorSessionCommand extends smithy_client_1.Command {
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
        const commandName = "CreateTrafficMirrorSessionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreateTrafficMirrorSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.CreateTrafficMirrorSessionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreateTrafficMirrorSessionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreateTrafficMirrorSessionCommand(output, context);
    }
}
exports.CreateTrafficMirrorSessionCommand = CreateTrafficMirrorSessionCommand;
//# sourceMappingURL=CreateTrafficMirrorSessionCommand.js.map