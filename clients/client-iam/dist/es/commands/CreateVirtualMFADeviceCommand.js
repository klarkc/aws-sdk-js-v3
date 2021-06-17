import { __extends } from "tslib";
import { CreateVirtualMFADeviceRequest, CreateVirtualMFADeviceResponse } from "../models/models_0";
import { deserializeAws_queryCreateVirtualMFADeviceCommand, serializeAws_queryCreateVirtualMFADeviceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new virtual MFA device for the AWS account. After creating the virtual
 *             MFA, use <a>EnableMFADevice</a> to attach the MFA device to an IAM user.
 *             For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA
 *                 device</a> in the <i>IAM User Guide</i>.</p>
 *         <p>For information about the maximum number of MFA devices you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
 *                 quotas</a> in the <i>IAM User Guide</i>.</p>
 *         <important>
 *             <p>The seed information contained in the QR code and the Base32 string should be
 *                 treated like any other secret access information. In other words, protect the seed
 *                 information as you would your AWS access keys or your passwords. After you
 *                 provision your virtual device, you should ensure that the information is destroyed
 *                 following secure procedures.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateVirtualMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateVirtualMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateVirtualMFADeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVirtualMFADeviceCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVirtualMFADeviceCommand = /** @class */ (function (_super) {
    __extends(CreateVirtualMFADeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVirtualMFADeviceCommand(input) {
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
    CreateVirtualMFADeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "CreateVirtualMFADeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVirtualMFADeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVirtualMFADeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVirtualMFADeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateVirtualMFADeviceCommand(input, context);
    };
    CreateVirtualMFADeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateVirtualMFADeviceCommand(output, context);
    };
    return CreateVirtualMFADeviceCommand;
}($Command));
export { CreateVirtualMFADeviceCommand };
//# sourceMappingURL=CreateVirtualMFADeviceCommand.js.map