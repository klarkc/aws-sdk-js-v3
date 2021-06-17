import { __extends } from "tslib";
import { RemoveTagsFromResourceMessage } from "../models/models_1";
import { deserializeAws_queryRemoveTagsFromResourceCommand, serializeAws_queryRemoveTagsFromResourceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes metadata tags from an Amazon RDS resource.</p>
 *          <p>For an overview on tagging an Amazon RDS resource,
 *           see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>
 *           in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveTagsFromResourceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveTagsFromResourceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RemoveTagsFromResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTagsFromResourceCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromResourceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveTagsFromResourceCommand = /** @class */ (function (_super) {
    __extends(RemoveTagsFromResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveTagsFromResourceCommand(input) {
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
    RemoveTagsFromResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "RemoveTagsFromResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveTagsFromResourceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveTagsFromResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRemoveTagsFromResourceCommand(input, context);
    };
    RemoveTagsFromResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRemoveTagsFromResourceCommand(output, context);
    };
    return RemoveTagsFromResourceCommand;
}($Command));
export { RemoveTagsFromResourceCommand };
//# sourceMappingURL=RemoveTagsFromResourceCommand.js.map