"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeServiceIntegrationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 * 			Returns the integration status of services that are integrated with DevOps Guru.
 * 			The one service that can be integrated with DevOps Guru
 *       	is AWS Systems Manager, which can be used to create an OpsItem for each generated insight.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeServiceIntegrationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeServiceIntegrationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeServiceIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceIntegrationCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceIntegrationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeServiceIntegrationCommand extends smithy_client_1.Command {
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
        const clientName = "DevOpsGuruClient";
        const commandName = "DescribeServiceIntegrationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeServiceIntegrationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeServiceIntegrationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DescribeServiceIntegrationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DescribeServiceIntegrationCommand(output, context);
    }
}
exports.DescribeServiceIntegrationCommand = DescribeServiceIntegrationCommand;
//# sourceMappingURL=DescribeServiceIntegrationCommand.js.map