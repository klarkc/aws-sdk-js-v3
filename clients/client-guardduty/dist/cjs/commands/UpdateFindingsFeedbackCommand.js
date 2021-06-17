"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFindingsFeedbackCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Marks the specified GuardDuty findings as useful or not useful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateFindingsFeedbackCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateFindingsFeedbackCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UpdateFindingsFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFindingsFeedbackCommandInput} for command's `input` shape.
 * @see {@link UpdateFindingsFeedbackCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateFindingsFeedbackCommand extends smithy_client_1.Command {
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
        const clientName = "GuardDutyClient";
        const commandName = "UpdateFindingsFeedbackCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateFindingsFeedbackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateFindingsFeedbackResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1UpdateFindingsFeedbackCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1UpdateFindingsFeedbackCommand(output, context);
    }
}
exports.UpdateFindingsFeedbackCommand = UpdateFindingsFeedbackCommand;
//# sourceMappingURL=UpdateFindingsFeedbackCommand.js.map