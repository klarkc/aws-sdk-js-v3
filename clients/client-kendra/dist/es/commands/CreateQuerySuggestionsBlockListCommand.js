import { __extends } from "tslib";
import { CreateQuerySuggestionsBlockListRequest, CreateQuerySuggestionsBlockListResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateQuerySuggestionsBlockListCommand, serializeAws_json1_1CreateQuerySuggestionsBlockListCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a block list to exlcude certain queries from suggestions.</p>
 *         <p>Any query that contains words or phrases specified in the block
 *             list is blocked or filtered out from being shown as a suggestion.</p>
 *         <p>You need to provide the file location of your block list text file
 *             in your S3 bucket. In your text file, enter each block word or phrase
 *             on a separate line.</p>
 *         <p>For information on the current quota limits for block lists, see
 *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas
 *                 for Amazon Kendra</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateQuerySuggestionsBlockListCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateQuerySuggestionsBlockListCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new CreateQuerySuggestionsBlockListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateQuerySuggestionsBlockListCommandInput} for command's `input` shape.
 * @see {@link CreateQuerySuggestionsBlockListCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateQuerySuggestionsBlockListCommand = /** @class */ (function (_super) {
    __extends(CreateQuerySuggestionsBlockListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateQuerySuggestionsBlockListCommand(input) {
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
    CreateQuerySuggestionsBlockListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "CreateQuerySuggestionsBlockListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateQuerySuggestionsBlockListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateQuerySuggestionsBlockListResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateQuerySuggestionsBlockListCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateQuerySuggestionsBlockListCommand(input, context);
    };
    CreateQuerySuggestionsBlockListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateQuerySuggestionsBlockListCommand(output, context);
    };
    return CreateQuerySuggestionsBlockListCommand;
}($Command));
export { CreateQuerySuggestionsBlockListCommand };
//# sourceMappingURL=CreateQuerySuggestionsBlockListCommand.js.map