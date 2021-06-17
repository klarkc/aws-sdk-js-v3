import { __extends } from "tslib";
import { DescribeIndexRequest, DescribeIndexResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeIndexCommand, serializeAws_json1_1DescribeIndexCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an existing Amazon Kendra index</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeIndexCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeIndexCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DescribeIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIndexCommandInput} for command's `input` shape.
 * @see {@link DescribeIndexCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeIndexCommand = /** @class */ (function (_super) {
    __extends(DescribeIndexCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeIndexCommand(input) {
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
    DescribeIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "DescribeIndexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeIndexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeIndexResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeIndexCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeIndexCommand(input, context);
    };
    DescribeIndexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeIndexCommand(output, context);
    };
    return DescribeIndexCommand;
}($Command));
export { DescribeIndexCommand };
//# sourceMappingURL=DescribeIndexCommand.js.map