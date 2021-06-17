import { __extends } from "tslib";
import { CreateTagsMessage } from "../models/models_0";
import { deserializeAws_queryCreateTagsCommand, serializeAws_queryCreateTagsCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds tags to a cluster.</p>
 *         <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a
 *             resource, you will receive an error and the attempt will fail.</p>
 *         <p>If you specify a key that already exists for the resource, the value for that key
 *             will be updated with the new value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateTagsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateTagsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTagsCommandInput} for command's `input` shape.
 * @see {@link CreateTagsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTagsCommand = /** @class */ (function (_super) {
    __extends(CreateTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTagsCommand(input) {
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
    CreateTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "CreateTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTagsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateTagsCommand(input, context);
    };
    CreateTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateTagsCommand(output, context);
    };
    return CreateTagsCommand;
}($Command));
export { CreateTagsCommand };
//# sourceMappingURL=CreateTagsCommand.js.map