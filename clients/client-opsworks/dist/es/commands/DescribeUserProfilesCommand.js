import { __extends } from "tslib";
import { DescribeUserProfilesRequest, DescribeUserProfilesResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeUserProfilesCommand, serializeAws_json1_1DescribeUserProfilesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describe specified users.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
 *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeUserProfilesCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeUserProfilesCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeUserProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserProfilesCommandInput} for command's `input` shape.
 * @see {@link DescribeUserProfilesCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUserProfilesCommand = /** @class */ (function (_super) {
    __extends(DescribeUserProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeUserProfilesCommand(input) {
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
    DescribeUserProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DescribeUserProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUserProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeUserProfilesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeUserProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeUserProfilesCommand(input, context);
    };
    DescribeUserProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeUserProfilesCommand(output, context);
    };
    return DescribeUserProfilesCommand;
}($Command));
export { DescribeUserProfilesCommand };
//# sourceMappingURL=DescribeUserProfilesCommand.js.map