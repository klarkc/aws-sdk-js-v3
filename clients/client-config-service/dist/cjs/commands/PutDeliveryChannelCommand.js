"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutDeliveryChannelCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a delivery channel object to deliver configuration
 * 			information to an Amazon S3 bucket and Amazon SNS topic.</p>
 * 		       <p>Before you can create a delivery channel, you must create a
 * 			configuration recorder.</p>
 * 		       <p>You can use this action to change the Amazon S3 bucket or an
 * 			Amazon SNS topic of the existing delivery channel. To change the
 * 			Amazon S3 bucket or an Amazon SNS topic, call this action and
 * 			specify the changed values for the S3 bucket and the SNS topic. If
 * 			you specify a different value for either the S3 bucket or the SNS
 * 			topic, this action will keep the existing value for the parameter
 * 			that is not changed.</p>
 * 		       <note>
 * 			         <p>You can have only one delivery channel per region in your
 * 				account.</p>
 *
 *
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutDeliveryChannelCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutDeliveryChannelCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutDeliveryChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDeliveryChannelCommandInput} for command's `input` shape.
 * @see {@link PutDeliveryChannelCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutDeliveryChannelCommand extends smithy_client_1.Command {
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
        const commandName = "PutDeliveryChannelCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutDeliveryChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutDeliveryChannelCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutDeliveryChannelCommand(output, context);
    }
}
exports.PutDeliveryChannelCommand = PutDeliveryChannelCommand;
//# sourceMappingURL=PutDeliveryChannelCommand.js.map