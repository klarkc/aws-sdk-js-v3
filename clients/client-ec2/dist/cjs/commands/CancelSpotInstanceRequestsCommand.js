"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelSpotInstanceRequestsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Cancels one or more Spot Instance requests.</p>
 *          <important>
 *             <p>Canceling a Spot Instance request does not terminate running Spot Instances associated with the request.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelSpotInstanceRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelSpotInstanceRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelSpotInstanceRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelSpotInstanceRequestsCommandInput} for command's `input` shape.
 * @see {@link CancelSpotInstanceRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CancelSpotInstanceRequestsCommand extends smithy_client_1.Command {
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
        const commandName = "CancelSpotInstanceRequestsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CancelSpotInstanceRequestsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CancelSpotInstanceRequestsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CancelSpotInstanceRequestsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CancelSpotInstanceRequestsCommand(output, context);
    }
}
exports.CancelSpotInstanceRequestsCommand = CancelSpotInstanceRequestsCommand;
//# sourceMappingURL=CancelSpotInstanceRequestsCommand.js.map