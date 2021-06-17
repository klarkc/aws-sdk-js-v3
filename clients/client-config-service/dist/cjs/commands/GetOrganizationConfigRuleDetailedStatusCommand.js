"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrganizationConfigRuleDetailedStatusCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns detailed status for each member account within an organization for a given organization config rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetOrganizationConfigRuleDetailedStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetOrganizationConfigRuleDetailedStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetOrganizationConfigRuleDetailedStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOrganizationConfigRuleDetailedStatusCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationConfigRuleDetailedStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetOrganizationConfigRuleDetailedStatusCommand extends smithy_client_1.Command {
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
        const clientName = "ConfigServiceClient";
        const commandName = "GetOrganizationConfigRuleDetailedStatusCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetOrganizationConfigRuleDetailedStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetOrganizationConfigRuleDetailedStatusResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand(output, context);
    }
}
exports.GetOrganizationConfigRuleDetailedStatusCommand = GetOrganizationConfigRuleDetailedStatusCommand;
//# sourceMappingURL=GetOrganizationConfigRuleDetailedStatusCommand.js.map