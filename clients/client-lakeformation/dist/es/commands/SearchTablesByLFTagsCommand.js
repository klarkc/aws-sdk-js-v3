import { __extends } from "tslib";
import { SearchTablesByLFTagsRequest, SearchTablesByLFTagsResponse } from "../models/models_0";
import { deserializeAws_json1_1SearchTablesByLFTagsCommand, serializeAws_json1_1SearchTablesByLFTagsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LFTags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, SearchTablesByLFTagsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, SearchTablesByLFTagsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new SearchTablesByLFTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchTablesByLFTagsCommandInput} for command's `input` shape.
 * @see {@link SearchTablesByLFTagsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchTablesByLFTagsCommand = /** @class */ (function (_super) {
    __extends(SearchTablesByLFTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchTablesByLFTagsCommand(input) {
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
    SearchTablesByLFTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "SearchTablesByLFTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchTablesByLFTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchTablesByLFTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchTablesByLFTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SearchTablesByLFTagsCommand(input, context);
    };
    SearchTablesByLFTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SearchTablesByLFTagsCommand(output, context);
    };
    return SearchTablesByLFTagsCommand;
}($Command));
export { SearchTablesByLFTagsCommand };
//# sourceMappingURL=SearchTablesByLFTagsCommand.js.map