import { __extends } from "tslib";
import { AddTagsInput, AddTagsOutput } from "../models/models_0";
import { deserializeAws_json1_1AddTagsCommand, serializeAws_json1_1AddTagsCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds tags to an Amazon EMR resource. Tags make it easier to associate clusters in
 *          various ways, such as grouping clusters to track your Amazon EMR resource allocation costs.
 *          For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, AddTagsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, AddTagsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new AddTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsCommandInput} for command's `input` shape.
 * @see {@link AddTagsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddTagsCommand = /** @class */ (function (_super) {
    __extends(AddTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddTagsCommand(input) {
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
    AddTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "AddTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddTagsInput.filterSensitiveLog,
            outputFilterSensitiveLog: AddTagsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddTagsCommand(input, context);
    };
    AddTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddTagsCommand(output, context);
    };
    return AddTagsCommand;
}($Command));
export { AddTagsCommand };
//# sourceMappingURL=AddTagsCommand.js.map