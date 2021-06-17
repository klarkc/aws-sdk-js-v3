import { __extends } from "tslib";
import { CustomerStorageMessage } from "../models/models_0";
import { deserializeAws_queryDescribeStorageCommand, serializeAws_queryDescribeStorageCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns account level backups storage size and provisional storage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeStorageCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeStorageCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeStorageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStorageCommandInput} for command's `input` shape.
 * @see {@link DescribeStorageCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStorageCommand = /** @class */ (function (_super) {
    __extends(DescribeStorageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeStorageCommand(input) {
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
    DescribeStorageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeStorageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: CustomerStorageMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeStorageCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeStorageCommand(input, context);
    };
    DescribeStorageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeStorageCommand(output, context);
    };
    return DescribeStorageCommand;
}($Command));
export { DescribeStorageCommand };
//# sourceMappingURL=DescribeStorageCommand.js.map