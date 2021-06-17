"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseProvisionedCapacityCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>This operation purchases a provisioned capacity unit for an AWS account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, PurchaseProvisionedCapacityCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, PurchaseProvisionedCapacityCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new PurchaseProvisionedCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseProvisionedCapacityCommandInput} for command's `input` shape.
 * @see {@link PurchaseProvisionedCapacityCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PurchaseProvisionedCapacityCommand extends smithy_client_1.Command {
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
        const clientName = "GlacierClient";
        const commandName = "PurchaseProvisionedCapacityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PurchaseProvisionedCapacityInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PurchaseProvisionedCapacityOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PurchaseProvisionedCapacityCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PurchaseProvisionedCapacityCommand(output, context);
    }
}
exports.PurchaseProvisionedCapacityCommand = PurchaseProvisionedCapacityCommand;
//# sourceMappingURL=PurchaseProvisionedCapacityCommand.js.map