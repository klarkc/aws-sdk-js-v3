import { __extends } from "tslib";
import { DescribeNamespaceRequest, DescribeNamespaceResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeNamespaceCommand, serializeAws_restJson1DescribeNamespaceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the current namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeNamespaceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeNamespaceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNamespaceCommandInput} for command's `input` shape.
 * @see {@link DescribeNamespaceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNamespaceCommand = /** @class */ (function (_super) {
    __extends(DescribeNamespaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNamespaceCommand(input) {
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
    DescribeNamespaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DescribeNamespaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNamespaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNamespaceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNamespaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeNamespaceCommand(input, context);
    };
    DescribeNamespaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeNamespaceCommand(output, context);
    };
    return DescribeNamespaceCommand;
}($Command));
export { DescribeNamespaceCommand };
//# sourceMappingURL=DescribeNamespaceCommand.js.map