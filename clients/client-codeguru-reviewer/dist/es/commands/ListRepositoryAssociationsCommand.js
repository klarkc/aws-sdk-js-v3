import { __extends } from "tslib";
import { ListRepositoryAssociationsRequest, ListRepositoryAssociationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListRepositoryAssociationsCommand, serializeAws_restJson1ListRepositoryAssociationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">
 *                <code>RepositoryAssociationSummary</code>
 *             </a> objects that
 *          contain summary information about a repository association. You can filter the returned list by
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">
 *                <code>ProviderType</code>
 *             </a>,
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">
 *                <code>Name</code>
 *             </a>,
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">
 *                <code>State</code>
 *             </a>, and
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">
 *                <code>Owner</code>
 *             </a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListRepositoryAssociationsCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListRepositoryAssociationsCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new ListRepositoryAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRepositoryAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListRepositoryAssociationsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRepositoryAssociationsCommand = /** @class */ (function (_super) {
    __extends(ListRepositoryAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRepositoryAssociationsCommand(input) {
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
    ListRepositoryAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruReviewerClient";
        var commandName = "ListRepositoryAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRepositoryAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRepositoryAssociationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRepositoryAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRepositoryAssociationsCommand(input, context);
    };
    ListRepositoryAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRepositoryAssociationsCommand(output, context);
    };
    return ListRepositoryAssociationsCommand;
}($Command));
export { ListRepositoryAssociationsCommand };
//# sourceMappingURL=ListRepositoryAssociationsCommand.js.map