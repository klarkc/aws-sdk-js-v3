"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAggregateConformancePackComplianceSummaryCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the count of compliant and noncompliant conformance packs across all AWS Accounts and AWS Regions in an aggregator. You can filter based on AWS Account ID or AWS Region.</p>
 * 		       <note>
 *             <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetAggregateConformancePackComplianceSummaryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetAggregateConformancePackComplianceSummaryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetAggregateConformancePackComplianceSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAggregateConformancePackComplianceSummaryCommandInput} for command's `input` shape.
 * @see {@link GetAggregateConformancePackComplianceSummaryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetAggregateConformancePackComplianceSummaryCommand extends smithy_client_1.Command {
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
        const commandName = "GetAggregateConformancePackComplianceSummaryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetAggregateConformancePackComplianceSummaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetAggregateConformancePackComplianceSummaryResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand(output, context);
    }
}
exports.GetAggregateConformancePackComplianceSummaryCommand = GetAggregateConformancePackComplianceSummaryCommand;
//# sourceMappingURL=GetAggregateConformancePackComplianceSummaryCommand.js.map