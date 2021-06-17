import { __extends } from "tslib";
import { SearchDatabasesByLFTagsRequest, SearchDatabasesByLFTagsResponse } from "../models/models_0";
import { deserializeAws_json1_1SearchDatabasesByLFTagsCommand, serializeAws_json1_1SearchDatabasesByLFTagsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, SearchDatabasesByLFTagsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, SearchDatabasesByLFTagsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new SearchDatabasesByLFTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchDatabasesByLFTagsCommandInput} for command's `input` shape.
 * @see {@link SearchDatabasesByLFTagsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchDatabasesByLFTagsCommand = /** @class */ (function (_super) {
    __extends(SearchDatabasesByLFTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchDatabasesByLFTagsCommand(input) {
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
    SearchDatabasesByLFTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "SearchDatabasesByLFTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchDatabasesByLFTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchDatabasesByLFTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchDatabasesByLFTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SearchDatabasesByLFTagsCommand(input, context);
    };
    SearchDatabasesByLFTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SearchDatabasesByLFTagsCommand(output, context);
    };
    return SearchDatabasesByLFTagsCommand;
}($Command));
export { SearchDatabasesByLFTagsCommand };
//# sourceMappingURL=SearchDatabasesByLFTagsCommand.js.map