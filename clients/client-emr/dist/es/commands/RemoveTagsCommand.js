import { __extends } from "tslib";
import { RemoveTagsInput, RemoveTagsOutput } from "../models/models_0";
import { deserializeAws_json1_1RemoveTagsCommand, serializeAws_json1_1RemoveTagsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes tags from an Amazon EMR resource. Tags make it easier to associate clusters in
 *          various ways, such as grouping clusters to track your Amazon EMR resource allocation costs.
 *          For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p>
 *          <p>The following example removes the stack tag with value Prod from a cluster:</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, RemoveTagsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, RemoveTagsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new RemoveTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTagsCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveTagsCommand = /** @class */ (function (_super) {
    __extends(RemoveTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveTagsCommand(input) {
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
    RemoveTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "RemoveTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveTagsInput.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveTagsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RemoveTagsCommand(input, context);
    };
    RemoveTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RemoveTagsCommand(output, context);
    };
    return RemoveTagsCommand;
}($Command));
export { RemoveTagsCommand };
//# sourceMappingURL=RemoveTagsCommand.js.map