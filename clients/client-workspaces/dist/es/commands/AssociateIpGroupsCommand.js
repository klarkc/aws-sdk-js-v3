import { __extends } from "tslib";
import { AssociateIpGroupsRequest, AssociateIpGroupsResult } from "../models/models_0";
import { deserializeAws_json1_1AssociateIpGroupsCommand, serializeAws_json1_1AssociateIpGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates the specified IP access control group with the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, AssociateIpGroupsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, AssociateIpGroupsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new AssociateIpGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateIpGroupsCommandInput} for command's `input` shape.
 * @see {@link AssociateIpGroupsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateIpGroupsCommand = /** @class */ (function (_super) {
    __extends(AssociateIpGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateIpGroupsCommand(input) {
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
    AssociateIpGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "AssociateIpGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateIpGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateIpGroupsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateIpGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateIpGroupsCommand(input, context);
    };
    AssociateIpGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateIpGroupsCommand(output, context);
    };
    return AssociateIpGroupsCommand;
}($Command));
export { AssociateIpGroupsCommand };
//# sourceMappingURL=AssociateIpGroupsCommand.js.map