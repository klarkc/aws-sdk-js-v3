import { __extends } from "tslib";
import { DescribeQuerySuggestionsConfigRequest, DescribeQuerySuggestionsConfigResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeQuerySuggestionsConfigCommand, serializeAws_json1_1DescribeQuerySuggestionsConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the settings of query suggestions for an index.</p>
 *         <p>This is used to check the current settings applied
 *             to query suggestions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeQuerySuggestionsConfigCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeQuerySuggestionsConfigCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DescribeQuerySuggestionsConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeQuerySuggestionsConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeQuerySuggestionsConfigCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeQuerySuggestionsConfigCommand = /** @class */ (function (_super) {
    __extends(DescribeQuerySuggestionsConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeQuerySuggestionsConfigCommand(input) {
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
    DescribeQuerySuggestionsConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "DescribeQuerySuggestionsConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeQuerySuggestionsConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeQuerySuggestionsConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeQuerySuggestionsConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeQuerySuggestionsConfigCommand(input, context);
    };
    DescribeQuerySuggestionsConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeQuerySuggestionsConfigCommand(output, context);
    };
    return DescribeQuerySuggestionsConfigCommand;
}($Command));
export { DescribeQuerySuggestionsConfigCommand };
//# sourceMappingURL=DescribeQuerySuggestionsConfigCommand.js.map