"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeSavingsPlanRatesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the specified Savings Plans rates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlanRatesCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlanRatesCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const command = new DescribeSavingsPlanRatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSavingsPlanRatesCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlanRatesCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeSavingsPlanRatesCommand extends smithy_client_1.Command {
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
        const clientName = "SavingsplansClient";
        const commandName = "DescribeSavingsPlanRatesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeSavingsPlanRatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeSavingsPlanRatesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DescribeSavingsPlanRatesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DescribeSavingsPlanRatesCommand(output, context);
    }
}
exports.DescribeSavingsPlanRatesCommand = DescribeSavingsPlanRatesCommand;
//# sourceMappingURL=DescribeSavingsPlanRatesCommand.js.map