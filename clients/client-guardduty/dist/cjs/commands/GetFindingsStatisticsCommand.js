"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFindingsStatisticsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists Amazon GuardDuty findings statistics for the specified detector ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetFindingsStatisticsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetFindingsStatisticsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetFindingsStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFindingsStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetFindingsStatisticsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetFindingsStatisticsCommand extends smithy_client_1.Command {
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
        const commandName = "GetFindingsStatisticsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetFindingsStatisticsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetFindingsStatisticsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetFindingsStatisticsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetFindingsStatisticsCommand(output, context);
    }
}
exports.GetFindingsStatisticsCommand = GetFindingsStatisticsCommand;
//# sourceMappingURL=GetFindingsStatisticsCommand.js.map