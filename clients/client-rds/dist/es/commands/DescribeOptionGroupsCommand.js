import { __extends } from "tslib";
import { DescribeOptionGroupsMessage, OptionGroups } from "../models/models_1";
import { deserializeAws_queryDescribeOptionGroupsCommand, serializeAws_queryDescribeOptionGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the available option groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeOptionGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeOptionGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeOptionGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOptionGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeOptionGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOptionGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeOptionGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOptionGroupsCommand(input) {
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
    DescribeOptionGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeOptionGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOptionGroupsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: OptionGroups.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOptionGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeOptionGroupsCommand(input, context);
    };
    DescribeOptionGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeOptionGroupsCommand(output, context);
    };
    return DescribeOptionGroupsCommand;
}($Command));
export { DescribeOptionGroupsCommand };
//# sourceMappingURL=DescribeOptionGroupsCommand.js.map