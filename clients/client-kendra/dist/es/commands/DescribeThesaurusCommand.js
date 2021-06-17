import { __extends } from "tslib";
import { DescribeThesaurusRequest, DescribeThesaurusResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeThesaurusCommand, serializeAws_json1_1DescribeThesaurusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an existing Amazon Kendra thesaurus.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeThesaurusCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeThesaurusCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DescribeThesaurusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThesaurusCommandInput} for command's `input` shape.
 * @see {@link DescribeThesaurusCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeThesaurusCommand = /** @class */ (function (_super) {
    __extends(DescribeThesaurusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeThesaurusCommand(input) {
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
    DescribeThesaurusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "DescribeThesaurusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeThesaurusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeThesaurusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeThesaurusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeThesaurusCommand(input, context);
    };
    DescribeThesaurusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeThesaurusCommand(output, context);
    };
    return DescribeThesaurusCommand;
}($Command));
export { DescribeThesaurusCommand };
//# sourceMappingURL=DescribeThesaurusCommand.js.map