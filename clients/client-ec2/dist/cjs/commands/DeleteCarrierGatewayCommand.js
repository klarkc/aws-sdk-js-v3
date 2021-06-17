"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCarrierGatewayCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a carrier gateway.</p>
 *         <important>
 *             <p>If you do not delete the route that contains the carrier gateway as the
 *                 Target, the route is a blackhole route. For information about how to delete a route, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRoute.html">DeleteRoute</a>.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteCarrierGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteCarrierGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteCarrierGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCarrierGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteCarrierGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteCarrierGatewayCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteCarrierGatewayCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.DeleteCarrierGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.DeleteCarrierGatewayResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DeleteCarrierGatewayCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DeleteCarrierGatewayCommand(output, context);
    }
}
exports.DeleteCarrierGatewayCommand = DeleteCarrierGatewayCommand;
//# sourceMappingURL=DeleteCarrierGatewayCommand.js.map