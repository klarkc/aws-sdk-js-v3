import { __extends } from "tslib";
import { DescribeUserHierarchyStructureRequest, DescribeUserHierarchyStructureResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeUserHierarchyStructureCommand, serializeAws_restJson1DescribeUserHierarchyStructureCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the hierarchy structure of the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeUserHierarchyStructureCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeUserHierarchyStructureCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeUserHierarchyStructureCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserHierarchyStructureCommandInput} for command's `input` shape.
 * @see {@link DescribeUserHierarchyStructureCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUserHierarchyStructureCommand = /** @class */ (function (_super) {
    __extends(DescribeUserHierarchyStructureCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeUserHierarchyStructureCommand(input) {
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
    DescribeUserHierarchyStructureCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DescribeUserHierarchyStructureCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUserHierarchyStructureRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeUserHierarchyStructureResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeUserHierarchyStructureCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeUserHierarchyStructureCommand(input, context);
    };
    DescribeUserHierarchyStructureCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeUserHierarchyStructureCommand(output, context);
    };
    return DescribeUserHierarchyStructureCommand;
}($Command));
export { DescribeUserHierarchyStructureCommand };
//# sourceMappingURL=DescribeUserHierarchyStructureCommand.js.map