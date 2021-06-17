import { __extends } from "tslib";
import { DBEngineVersionMessage, DescribeDBEngineVersionsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeDBEngineVersionsCommand, serializeAws_queryDescribeDBEngineVersionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the available DB engines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBEngineVersionsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBEngineVersionsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeDBEngineVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBEngineVersionsCommand = /** @class */ (function (_super) {
    __extends(DescribeDBEngineVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBEngineVersionsCommand(input) {
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
    DescribeDBEngineVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "DescribeDBEngineVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBEngineVersionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBEngineVersionMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBEngineVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBEngineVersionsCommand(input, context);
    };
    DescribeDBEngineVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBEngineVersionsCommand(output, context);
    };
    return DescribeDBEngineVersionsCommand;
}($Command));
export { DescribeDBEngineVersionsCommand };
//# sourceMappingURL=DescribeDBEngineVersionsCommand.js.map