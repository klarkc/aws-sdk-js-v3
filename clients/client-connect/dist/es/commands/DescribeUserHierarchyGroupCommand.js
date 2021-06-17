import { __extends } from "tslib";
import { DescribeUserHierarchyGroupRequest, DescribeUserHierarchyGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeUserHierarchyGroupCommand, serializeAws_restJson1DescribeUserHierarchyGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified hierarchy group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeUserHierarchyGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeUserHierarchyGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeUserHierarchyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserHierarchyGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeUserHierarchyGroupCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUserHierarchyGroupCommand = /** @class */ (function (_super) {
    __extends(DescribeUserHierarchyGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeUserHierarchyGroupCommand(input) {
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
    DescribeUserHierarchyGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DescribeUserHierarchyGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUserHierarchyGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeUserHierarchyGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeUserHierarchyGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeUserHierarchyGroupCommand(input, context);
    };
    DescribeUserHierarchyGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeUserHierarchyGroupCommand(output, context);
    };
    return DescribeUserHierarchyGroupCommand;
}($Command));
export { DescribeUserHierarchyGroupCommand };
//# sourceMappingURL=DescribeUserHierarchyGroupCommand.js.map