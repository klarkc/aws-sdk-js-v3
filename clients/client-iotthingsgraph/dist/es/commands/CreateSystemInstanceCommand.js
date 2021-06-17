import { __extends } from "tslib";
import { CreateSystemInstanceRequest, CreateSystemInstanceResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateSystemInstanceCommand, serializeAws_json1_1CreateSystemInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a system instance. </p>
 *          <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is
 *             specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to
 *             call <code>DeploySystemInstance</code> after running this action.</p>
 *          <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions
 *          to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p>
 *          <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role
 *       that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p>
 *          <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, CreateSystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, CreateSystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new CreateSystemInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSystemInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateSystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSystemInstanceCommand = /** @class */ (function (_super) {
    __extends(CreateSystemInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSystemInstanceCommand(input) {
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
    CreateSystemInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "CreateSystemInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSystemInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSystemInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSystemInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateSystemInstanceCommand(input, context);
    };
    CreateSystemInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateSystemInstanceCommand(output, context);
    };
    return CreateSystemInstanceCommand;
}($Command));
export { CreateSystemInstanceCommand };
//# sourceMappingURL=CreateSystemInstanceCommand.js.map