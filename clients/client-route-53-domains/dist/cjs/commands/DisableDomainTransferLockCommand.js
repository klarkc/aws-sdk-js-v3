"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableDomainTransferLockCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>This operation removes the transfer lock on the domain (specifically the
 * 			<code>clientTransferProhibited</code> status) to allow domain transfers. We recommend
 * 			you refrain from performing this action unless you intend to transfer the domain to a
 * 			different registrar. Successful submission returns an operation ID that you can use to track
 * 			the progress and completion of the action. If the request is not completed successfully, the
 * 			domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, DisableDomainTransferLockCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, DisableDomainTransferLockCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new DisableDomainTransferLockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableDomainTransferLockCommandInput} for command's `input` shape.
 * @see {@link DisableDomainTransferLockCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DisableDomainTransferLockCommand extends smithy_client_1.Command {
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
        const clientName = "Route53DomainsClient";
        const commandName = "DisableDomainTransferLockCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DisableDomainTransferLockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DisableDomainTransferLockResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DisableDomainTransferLockCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DisableDomainTransferLockCommand(output, context);
    }
}
exports.DisableDomainTransferLockCommand = DisableDomainTransferLockCommand;
//# sourceMappingURL=DisableDomainTransferLockCommand.js.map