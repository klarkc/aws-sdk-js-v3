"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferCertificateCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Transfers the specified certificate to the specified AWS account.</p>
 *          <p>You can cancel the transfer until it is acknowledged by the recipient.</p>
 *          <p>No notification is sent to the transfer destination's account. It is up to the caller
 *          to notify the transfer target.</p>
 *          <p>The certificate being transferred must not be in the ACTIVE state. You can use the
 *          UpdateCertificate API to deactivate it.</p>
 *          <p>The certificate must not have any policies attached to it. You can use the
 *          DetachPrincipalPolicy API to detach them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, TransferCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, TransferCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new TransferCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TransferCertificateCommandInput} for command's `input` shape.
 * @see {@link TransferCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
class TransferCertificateCommand extends smithy_client_1.Command {
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
        const clientName = "IoTClient";
        const commandName = "TransferCertificateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.TransferCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.TransferCertificateResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1TransferCertificateCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1TransferCertificateCommand(output, context);
    }
}
exports.TransferCertificateCommand = TransferCertificateCommand;
//# sourceMappingURL=TransferCertificateCommand.js.map