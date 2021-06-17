"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeDeliveryChannelStatusCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the current status of the specified delivery channel.
 * 			If a delivery channel is not specified, this action returns the
 * 			current status of all delivery channels associated with the
 * 			account.</p>
 * 		       <note>
 * 			         <p>Currently, you can specify only one delivery channel per
 * 				region in your account.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeDeliveryChannelStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeDeliveryChannelStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeDeliveryChannelStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeliveryChannelStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveryChannelStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeDeliveryChannelStatusCommand extends smithy_client_1.Command {
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
        const clientName = "ConfigServiceClient";
        const commandName = "DescribeDeliveryChannelStatusCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeDeliveryChannelStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeDeliveryChannelStatusResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeDeliveryChannelStatusCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeDeliveryChannelStatusCommand(output, context);
    }
}
exports.DescribeDeliveryChannelStatusCommand = DescribeDeliveryChannelStatusCommand;
//# sourceMappingURL=DescribeDeliveryChannelStatusCommand.js.map