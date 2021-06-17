"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateThreatIntelSetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses.
 *       GuardDuty generates findings based on ThreatIntelSets. Only users of the administrator account can
 *       use this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreateThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link CreateThreatIntelSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateThreatIntelSetCommand extends smithy_client_1.Command {
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
        const commandName = "CreateThreatIntelSetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateThreatIntelSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateThreatIntelSetResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateThreatIntelSetCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateThreatIntelSetCommand(output, context);
    }
}
exports.CreateThreatIntelSetCommand = CreateThreatIntelSetCommand;
//# sourceMappingURL=CreateThreatIntelSetCommand.js.map