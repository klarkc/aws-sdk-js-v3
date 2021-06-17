"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetComplianceDetailCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns detailed compliance information about the specified member account. Details
 *       include resources that are in and out of compliance with the specified policy. Resources are
 *       considered noncompliant for AWS WAF and Shield Advanced policies if the specified policy has
 *       not been applied to them. Resources are considered noncompliant for security group policies if
 *       they are in scope of the policy, they violate one or more of the policy rules, and remediation
 *         is disabled or not possible. Resources are considered noncompliant for Network Firewall policies
 *         if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet,
 *         if a subnet created by the Firewall Manager doesn't have the expected route table,
 *         and for modifications to a firewall policy that violate the Firewall Manager policy's rules. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetComplianceDetailCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetComplianceDetailCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetComplianceDetailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComplianceDetailCommandInput} for command's `input` shape.
 * @see {@link GetComplianceDetailCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetComplianceDetailCommand extends smithy_client_1.Command {
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
        const clientName = "FMSClient";
        const commandName = "GetComplianceDetailCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetComplianceDetailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetComplianceDetailResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetComplianceDetailCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetComplianceDetailCommand(output, context);
    }
}
exports.GetComplianceDetailCommand = GetComplianceDetailCommand;
//# sourceMappingURL=GetComplianceDetailCommand.js.map