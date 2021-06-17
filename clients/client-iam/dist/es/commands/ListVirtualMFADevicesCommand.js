import { __extends } from "tslib";
import { ListVirtualMFADevicesRequest, ListVirtualMFADevicesResponse } from "../models/models_0";
import { deserializeAws_queryListVirtualMFADevicesCommand, serializeAws_queryListVirtualMFADevicesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the virtual MFA devices defined in the AWS account by assignment status. If
 *             you do not specify an assignment status, the operation returns a list of all virtual MFA
 *             devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or
 *                 <code>Any</code>.</p>
 *         <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a virtual MFA device, see
 *                     <a>ListVirtualMFADevices</a>.</p>
 *         </note>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListVirtualMFADevicesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListVirtualMFADevicesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListVirtualMFADevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualMFADevicesCommandInput} for command's `input` shape.
 * @see {@link ListVirtualMFADevicesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVirtualMFADevicesCommand = /** @class */ (function (_super) {
    __extends(ListVirtualMFADevicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListVirtualMFADevicesCommand(input) {
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
    ListVirtualMFADevicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListVirtualMFADevicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListVirtualMFADevicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListVirtualMFADevicesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListVirtualMFADevicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListVirtualMFADevicesCommand(input, context);
    };
    ListVirtualMFADevicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListVirtualMFADevicesCommand(output, context);
    };
    return ListVirtualMFADevicesCommand;
}($Command));
export { ListVirtualMFADevicesCommand };
//# sourceMappingURL=ListVirtualMFADevicesCommand.js.map