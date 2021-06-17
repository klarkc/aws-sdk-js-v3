import { __extends } from "tslib";
import { DescribeOptionGroupOptionsMessage, OptionGroupOptionsMessage } from "../models/models_1";
import { deserializeAws_queryDescribeOptionGroupOptionsCommand, serializeAws_queryDescribeOptionGroupOptionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes all available options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeOptionGroupOptionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeOptionGroupOptionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeOptionGroupOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOptionGroupOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOptionGroupOptionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOptionGroupOptionsCommand = /** @class */ (function (_super) {
    __extends(DescribeOptionGroupOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOptionGroupOptionsCommand(input) {
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
    DescribeOptionGroupOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeOptionGroupOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOptionGroupOptionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: OptionGroupOptionsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOptionGroupOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeOptionGroupOptionsCommand(input, context);
    };
    DescribeOptionGroupOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeOptionGroupOptionsCommand(output, context);
    };
    return DescribeOptionGroupOptionsCommand;
}($Command));
export { DescribeOptionGroupOptionsCommand };
//# sourceMappingURL=DescribeOptionGroupOptionsCommand.js.map