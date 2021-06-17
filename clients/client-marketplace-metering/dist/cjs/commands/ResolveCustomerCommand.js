"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveCustomerCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>ResolveCustomer is called by a SaaS application during the registration process.
 *             When a buyer visits your website during the registration process, the buyer submits a
 *             registration token through their browser. The registration token is resolved through
 *             this API to obtain a CustomerIdentifier and product code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, ResolveCustomerCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, ResolveCustomerCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * const client = new MarketplaceMeteringClient(config);
 * const command = new ResolveCustomerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResolveCustomerCommandInput} for command's `input` shape.
 * @see {@link ResolveCustomerCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ResolveCustomerCommand extends smithy_client_1.Command {
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
        const clientName = "MarketplaceMeteringClient";
        const commandName = "ResolveCustomerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ResolveCustomerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ResolveCustomerResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ResolveCustomerCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ResolveCustomerCommand(output, context);
    }
}
exports.ResolveCustomerCommand = ResolveCustomerCommand;
//# sourceMappingURL=ResolveCustomerCommand.js.map