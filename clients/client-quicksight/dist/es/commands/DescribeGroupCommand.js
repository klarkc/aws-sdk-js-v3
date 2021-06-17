import { __extends } from "tslib";
import { DescribeGroupRequest, DescribeGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeGroupCommand, serializeAws_restJson1DescribeGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an Amazon QuickSight group's description and Amazon Resource Name (ARN). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeGroupCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeGroupCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeGroupCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGroupCommand = /** @class */ (function (_super) {
    __extends(DescribeGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGroupCommand(input) {
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
    DescribeGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DescribeGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeGroupCommand(input, context);
    };
    DescribeGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeGroupCommand(output, context);
    };
    return DescribeGroupCommand;
}($Command));
export { DescribeGroupCommand };
//# sourceMappingURL=DescribeGroupCommand.js.map