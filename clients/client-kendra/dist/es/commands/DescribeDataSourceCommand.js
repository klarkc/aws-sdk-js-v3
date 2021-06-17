import { __extends } from "tslib";
import { DescribeDataSourceRequest, DescribeDataSourceResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeDataSourceCommand, serializeAws_json1_1DescribeDataSourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a Amazon Kendra data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeDataSourceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeDataSourceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DescribeDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataSourceCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSourceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDataSourceCommand = /** @class */ (function (_super) {
    __extends(DescribeDataSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDataSourceCommand(input) {
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
    DescribeDataSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "DescribeDataSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDataSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDataSourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDataSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDataSourceCommand(input, context);
    };
    DescribeDataSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDataSourceCommand(output, context);
    };
    return DescribeDataSourceCommand;
}($Command));
export { DescribeDataSourceCommand };
//# sourceMappingURL=DescribeDataSourceCommand.js.map