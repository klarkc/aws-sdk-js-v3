import { __extends } from "tslib";
import { DescribeQuerySuggestionsBlockListRequest, DescribeQuerySuggestionsBlockListResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommand, serializeAws_json1_1DescribeQuerySuggestionsBlockListCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a block list used for query suggestions for an index.</p>
 *         <p>This is used to check the current settings that are applied to a
 *             block list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeQuerySuggestionsBlockListCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeQuerySuggestionsBlockListCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DescribeQuerySuggestionsBlockListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeQuerySuggestionsBlockListCommandInput} for command's `input` shape.
 * @see {@link DescribeQuerySuggestionsBlockListCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeQuerySuggestionsBlockListCommand = /** @class */ (function (_super) {
    __extends(DescribeQuerySuggestionsBlockListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeQuerySuggestionsBlockListCommand(input) {
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
    DescribeQuerySuggestionsBlockListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "DescribeQuerySuggestionsBlockListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeQuerySuggestionsBlockListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeQuerySuggestionsBlockListResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeQuerySuggestionsBlockListCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeQuerySuggestionsBlockListCommand(input, context);
    };
    DescribeQuerySuggestionsBlockListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommand(output, context);
    };
    return DescribeQuerySuggestionsBlockListCommand;
}($Command));
export { DescribeQuerySuggestionsBlockListCommand };
//# sourceMappingURL=DescribeQuerySuggestionsBlockListCommand.js.map