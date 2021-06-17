"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeCompanyNetworkConfigurationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the networking configuration to access the internal websites associated with
 *             the specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeCompanyNetworkConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeCompanyNetworkConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeCompanyNetworkConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCompanyNetworkConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeCompanyNetworkConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeCompanyNetworkConfigurationCommand extends smithy_client_1.Command {
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
        const clientName = "WorkLinkClient";
        const commandName = "DescribeCompanyNetworkConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeCompanyNetworkConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeCompanyNetworkConfigurationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DescribeCompanyNetworkConfigurationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DescribeCompanyNetworkConfigurationCommand(output, context);
    }
}
exports.DescribeCompanyNetworkConfigurationCommand = DescribeCompanyNetworkConfigurationCommand;
//# sourceMappingURL=DescribeCompanyNetworkConfigurationCommand.js.map