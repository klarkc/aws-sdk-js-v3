import { __extends } from "tslib";
import { CreateIpGroupRequest, CreateIpGroupResult } from "../models/models_0";
import { deserializeAws_json1_1CreateIpGroupCommand, serializeAws_json1_1CreateIpGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an IP access control group.</p>
 *          <p>An IP access control group provides you with the ability to control the IP addresses
 *          from which users are allowed to access their WorkSpaces. To specify the CIDR address
 *          ranges, add rules to your IP access control group and then associate the group with your
 *          directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p>
 *
 *          <p>There is a default IP access control group associated with your directory. If you don't
 *          associate an IP access control group with your directory, the default group is used. The
 *          default group includes a default rule that allows users to access their WorkSpaces from
 *          anywhere. You cannot modify the default IP access control group for your directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateIpGroupCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateIpGroupCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new CreateIpGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIpGroupCommandInput} for command's `input` shape.
 * @see {@link CreateIpGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateIpGroupCommand = /** @class */ (function (_super) {
    __extends(CreateIpGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateIpGroupCommand(input) {
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
    CreateIpGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "CreateIpGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateIpGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateIpGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateIpGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateIpGroupCommand(input, context);
    };
    CreateIpGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateIpGroupCommand(output, context);
    };
    return CreateIpGroupCommand;
}($Command));
export { CreateIpGroupCommand };
//# sourceMappingURL=CreateIpGroupCommand.js.map