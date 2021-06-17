"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisassociateAwsAccountFromPartnerAccountCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Disassociates your AWS account from a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, disassociates your AWS account from all partner accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateAwsAccountFromPartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateAwsAccountFromPartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DisassociateAwsAccountFromPartnerAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateAwsAccountFromPartnerAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateAwsAccountFromPartnerAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DisassociateAwsAccountFromPartnerAccountCommand extends smithy_client_1.Command {
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
        const clientName = "IoTWirelessClient";
        const commandName = "DisassociateAwsAccountFromPartnerAccountCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DisassociateAwsAccountFromPartnerAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DisassociateAwsAccountFromPartnerAccountResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand(output, context);
    }
}
exports.DisassociateAwsAccountFromPartnerAccountCommand = DisassociateAwsAccountFromPartnerAccountCommand;
//# sourceMappingURL=DisassociateAwsAccountFromPartnerAccountCommand.js.map