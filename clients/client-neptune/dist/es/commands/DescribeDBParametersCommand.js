import { __extends } from "tslib";
import { DBParameterGroupDetails, DescribeDBParametersMessage } from "../models/models_0";
import { deserializeAws_queryDescribeDBParametersCommand, serializeAws_queryDescribeDBParametersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the detailed parameter list for a particular DB parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBParametersCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBParametersCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeDBParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBParametersCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBParametersCommand = /** @class */ (function (_super) {
    __extends(DescribeDBParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBParametersCommand(input) {
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
    DescribeDBParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "DescribeDBParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBParametersMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBParameterGroupDetails.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBParametersCommand(input, context);
    };
    DescribeDBParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBParametersCommand(output, context);
    };
    return DescribeDBParametersCommand;
}($Command));
export { DescribeDBParametersCommand };
//# sourceMappingURL=DescribeDBParametersCommand.js.map