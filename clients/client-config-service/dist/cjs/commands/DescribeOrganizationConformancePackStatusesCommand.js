"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeOrganizationConformancePackStatusesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Provides organization conformance pack deployment status for an organization. </p>
 * 		       <note>
 * 			         <p>The status is not considered successful until organization conformance pack is successfully
 * 				deployed in all the member accounts with an exception of excluded accounts.</p>
 * 			         <p>When you specify the limit and the next token, you receive a paginated response.
 * 				Limit and next token are not applicable if you specify organization conformance pack names.
 * 				They are only applicable, when you request all the organization conformance packs.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeOrganizationConformancePackStatusesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeOrganizationConformancePackStatusesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeOrganizationConformancePackStatusesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationConformancePackStatusesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConformancePackStatusesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeOrganizationConformancePackStatusesCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeOrganizationConformancePackStatusesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeOrganizationConformancePackStatusesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeOrganizationConformancePackStatusesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand(output, context);
    }
}
exports.DescribeOrganizationConformancePackStatusesCommand = DescribeOrganizationConformancePackStatusesCommand;
//# sourceMappingURL=DescribeOrganizationConformancePackStatusesCommand.js.map