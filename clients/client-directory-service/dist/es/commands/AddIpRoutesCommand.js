import { __extends } from "tslib";
import { AddIpRoutesRequest, AddIpRoutesResult } from "../models/models_0";
import { deserializeAws_json1_1AddIpRoutesCommand, serializeAws_json1_1AddIpRoutesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>If the DNS server for your on-premises domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on AWS to a peer VPC. </p>
 *          <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, AddIpRoutesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, AddIpRoutesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new AddIpRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddIpRoutesCommandInput} for command's `input` shape.
 * @see {@link AddIpRoutesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddIpRoutesCommand = /** @class */ (function (_super) {
    __extends(AddIpRoutesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddIpRoutesCommand(input) {
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
    AddIpRoutesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "AddIpRoutesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddIpRoutesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddIpRoutesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddIpRoutesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddIpRoutesCommand(input, context);
    };
    AddIpRoutesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddIpRoutesCommand(output, context);
    };
    return AddIpRoutesCommand;
}($Command));
export { AddIpRoutesCommand };
//# sourceMappingURL=AddIpRoutesCommand.js.map