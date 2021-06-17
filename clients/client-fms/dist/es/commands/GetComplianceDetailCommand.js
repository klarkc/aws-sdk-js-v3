import { __extends } from "tslib";
import { GetComplianceDetailRequest, GetComplianceDetailResponse } from "../models/models_0";
import { deserializeAws_json1_1GetComplianceDetailCommand, serializeAws_json1_1GetComplianceDetailCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var GetComplianceDetailCommand = /** @class */ (function (_super) {
    __extends(GetComplianceDetailCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetComplianceDetailCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    GetComplianceDetailCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "GetComplianceDetailCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetComplianceDetailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetComplianceDetailResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetComplianceDetailCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetComplianceDetailCommand(input, context);
    };
    GetComplianceDetailCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetComplianceDetailCommand(output, context);
    };
    return GetComplianceDetailCommand;
}($Command));
export { GetComplianceDetailCommand };
//# sourceMappingURL=GetComplianceDetailCommand.js.map