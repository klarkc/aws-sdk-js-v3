import { __extends } from "tslib";
import { GetFlowLogsIntegrationTemplateRequest, GetFlowLogsIntegrationTemplateResult } from "../models/models_4";
import { deserializeAws_ec2GetFlowLogsIntegrationTemplateCommand, serializeAws_ec2GetFlowLogsIntegrationTemplateCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates a CloudFormation template that streamlines and automates the integration of VPC flow logs
 *             with Amazon Athena. This make it easier for you to query and gain insights from VPC flow logs data.
 *             Based on the information that you provide, we configure resources in the template to do the following:</p>
 *         <ul>
 *             <li>
 *                 <p>Create a table in Athena that maps fields to a custom log format</p>
 *             </li>
 *             <li>
 *                 <p>Create a Lambda function that updates the table with new partitions on a daily, weekly, or
 *                     monthly basis</p>
 *             </li>
 *             <li>
 *                 <p>Create a table partitioned between two timestamps in the past</p>
 *             </li>
 *             <li>
 *                 <p>Create a set of named queries in Athena that you can use to get started quickly</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetFlowLogsIntegrationTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetFlowLogsIntegrationTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetFlowLogsIntegrationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFlowLogsIntegrationTemplateCommandInput} for command's `input` shape.
 * @see {@link GetFlowLogsIntegrationTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFlowLogsIntegrationTemplateCommand = /** @class */ (function (_super) {
    __extends(GetFlowLogsIntegrationTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFlowLogsIntegrationTemplateCommand(input) {
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
    GetFlowLogsIntegrationTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetFlowLogsIntegrationTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFlowLogsIntegrationTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFlowLogsIntegrationTemplateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFlowLogsIntegrationTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetFlowLogsIntegrationTemplateCommand(input, context);
    };
    GetFlowLogsIntegrationTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetFlowLogsIntegrationTemplateCommand(output, context);
    };
    return GetFlowLogsIntegrationTemplateCommand;
}($Command));
export { GetFlowLogsIntegrationTemplateCommand };
//# sourceMappingURL=GetFlowLogsIntegrationTemplateCommand.js.map