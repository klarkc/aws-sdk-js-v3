import { __extends } from "tslib";
import { CreateThesaurusRequest, CreateThesaurusResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateThesaurusCommand, serializeAws_json1_1CreateThesaurusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a thesaurus for an index. The thesaurus
 *       contains a list of synonyms in Solr format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateThesaurusCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateThesaurusCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new CreateThesaurusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateThesaurusCommandInput} for command's `input` shape.
 * @see {@link CreateThesaurusCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateThesaurusCommand = /** @class */ (function (_super) {
    __extends(CreateThesaurusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateThesaurusCommand(input) {
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
    CreateThesaurusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "CreateThesaurusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateThesaurusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateThesaurusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateThesaurusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateThesaurusCommand(input, context);
    };
    CreateThesaurusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateThesaurusCommand(output, context);
    };
    return CreateThesaurusCommand;
}($Command));
export { CreateThesaurusCommand };
//# sourceMappingURL=CreateThesaurusCommand.js.map