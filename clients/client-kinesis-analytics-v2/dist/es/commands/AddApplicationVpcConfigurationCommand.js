import { __extends } from "tslib";
import { AddApplicationVpcConfigurationRequest, AddApplicationVpcConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1AddApplicationVpcConfigurationCommand, serializeAws_json1_1AddApplicationVpcConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store
 *         and access resources securely.</p>
 *          <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p>
 *          <ul>
 *             <li>
 *                <p>VPC configurations are not supported for SQL applications.</p>
 *             </li>
 *             <li>
 *                <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the
 *            Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationVpcConfigurationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationVpcConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new AddApplicationVpcConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddApplicationVpcConfigurationCommandInput} for command's `input` shape.
 * @see {@link AddApplicationVpcConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddApplicationVpcConfigurationCommand = /** @class */ (function (_super) {
    __extends(AddApplicationVpcConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddApplicationVpcConfigurationCommand(input) {
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
    AddApplicationVpcConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "AddApplicationVpcConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddApplicationVpcConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddApplicationVpcConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddApplicationVpcConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddApplicationVpcConfigurationCommand(input, context);
    };
    AddApplicationVpcConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddApplicationVpcConfigurationCommand(output, context);
    };
    return AddApplicationVpcConfigurationCommand;
}($Command));
export { AddApplicationVpcConfigurationCommand };
//# sourceMappingURL=AddApplicationVpcConfigurationCommand.js.map