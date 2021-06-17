"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvokeScreenAutomationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app.
 *             The API allows setting local variables, which can then be used in the automation being invoked.
 *             This allows automating the Honeycode app interactions to write, update or delete data in the workbook.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, InvokeScreenAutomationCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, InvokeScreenAutomationCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new InvokeScreenAutomationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvokeScreenAutomationCommandInput} for command's `input` shape.
 * @see {@link InvokeScreenAutomationCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class InvokeScreenAutomationCommand extends smithy_client_1.Command {
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
        const clientName = "HoneycodeClient";
        const commandName = "InvokeScreenAutomationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.InvokeScreenAutomationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.InvokeScreenAutomationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1InvokeScreenAutomationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1InvokeScreenAutomationCommand(output, context);
    }
}
exports.InvokeScreenAutomationCommand = InvokeScreenAutomationCommand;
//# sourceMappingURL=InvokeScreenAutomationCommand.js.map