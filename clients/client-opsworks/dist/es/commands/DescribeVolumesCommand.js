import { __extends } from "tslib";
import { DescribeVolumesRequest, DescribeVolumesResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeVolumesCommand, serializeAws_json1_1DescribeVolumesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an instance's Amazon EBS volumes.</p>
 *          <note>
 *             <p>This call accepts only one resource-identifying parameter.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeVolumesCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeVolumesCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeVolumesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVolumesCommandInput} for command's `input` shape.
 * @see {@link DescribeVolumesCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVolumesCommand = /** @class */ (function (_super) {
    __extends(DescribeVolumesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVolumesCommand(input) {
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
    DescribeVolumesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DescribeVolumesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVolumesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVolumesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVolumesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeVolumesCommand(input, context);
    };
    DescribeVolumesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeVolumesCommand(output, context);
    };
    return DescribeVolumesCommand;
}($Command));
export { DescribeVolumesCommand };
//# sourceMappingURL=DescribeVolumesCommand.js.map