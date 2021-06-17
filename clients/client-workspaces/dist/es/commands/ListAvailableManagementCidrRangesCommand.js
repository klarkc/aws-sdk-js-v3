import { __extends } from "tslib";
import { ListAvailableManagementCidrRangesRequest, ListAvailableManagementCidrRangesResult } from "../models/models_0";
import { deserializeAws_json1_1ListAvailableManagementCidrRangesCommand, serializeAws_json1_1ListAvailableManagementCidrRangesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use
 *          for the network management interface when you enable Bring Your Own License (BYOL). </p>
 *
 *          <p>This operation can be run only by AWS accounts that are enabled for BYOL. If your account
 *          isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p>
 *
 *          <p>The management network interface is connected to a secure Amazon WorkSpaces management
 *          network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
 *          clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ListAvailableManagementCidrRangesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ListAvailableManagementCidrRangesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ListAvailableManagementCidrRangesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAvailableManagementCidrRangesCommandInput} for command's `input` shape.
 * @see {@link ListAvailableManagementCidrRangesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAvailableManagementCidrRangesCommand = /** @class */ (function (_super) {
    __extends(ListAvailableManagementCidrRangesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAvailableManagementCidrRangesCommand(input) {
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
    ListAvailableManagementCidrRangesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "ListAvailableManagementCidrRangesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAvailableManagementCidrRangesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAvailableManagementCidrRangesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAvailableManagementCidrRangesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAvailableManagementCidrRangesCommand(input, context);
    };
    ListAvailableManagementCidrRangesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAvailableManagementCidrRangesCommand(output, context);
    };
    return ListAvailableManagementCidrRangesCommand;
}($Command));
export { ListAvailableManagementCidrRangesCommand };
//# sourceMappingURL=ListAvailableManagementCidrRangesCommand.js.map