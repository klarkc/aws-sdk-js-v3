"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnableDomainTransferLockCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status)
 * 			to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and
 * 			completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, EnableDomainTransferLockCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, EnableDomainTransferLockCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new EnableDomainTransferLockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableDomainTransferLockCommandInput} for command's `input` shape.
 * @see {@link EnableDomainTransferLockCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class EnableDomainTransferLockCommand extends smithy_client_1.Command {
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
        const commandName = "EnableDomainTransferLockCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.EnableDomainTransferLockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.EnableDomainTransferLockResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1EnableDomainTransferLockCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1EnableDomainTransferLockCommand(output, context);
    }
}
exports.EnableDomainTransferLockCommand = EnableDomainTransferLockCommand;
//# sourceMappingURL=EnableDomainTransferLockCommand.js.map