import { __extends } from "tslib";
import { DescribeDBLogFilesMessage, DescribeDBLogFilesResponse } from "../models/models_0";
import { deserializeAws_queryDescribeDBLogFilesCommand, serializeAws_queryDescribeDBLogFilesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of DB log files for the DB instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBLogFilesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBLogFilesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBLogFilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBLogFilesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBLogFilesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBLogFilesCommand = /** @class */ (function (_super) {
    __extends(DescribeDBLogFilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBLogFilesCommand(input) {
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
    DescribeDBLogFilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeDBLogFilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBLogFilesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDBLogFilesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBLogFilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBLogFilesCommand(input, context);
    };
    DescribeDBLogFilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBLogFilesCommand(output, context);
    };
    return DescribeDBLogFilesCommand;
}($Command));
export { DescribeDBLogFilesCommand };
//# sourceMappingURL=DescribeDBLogFilesCommand.js.map