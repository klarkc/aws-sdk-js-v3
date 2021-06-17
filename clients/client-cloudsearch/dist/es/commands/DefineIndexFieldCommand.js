import { __extends } from "tslib";
import { DefineIndexFieldRequest, DefineIndexFieldResponse } from "../models/models_0";
import { deserializeAws_queryDefineIndexFieldCommand, serializeAws_queryDefineIndexFieldCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DefineIndexFieldCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DefineIndexFieldCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DefineIndexFieldCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DefineIndexFieldCommandInput} for command's `input` shape.
 * @see {@link DefineIndexFieldCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DefineIndexFieldCommand = /** @class */ (function (_super) {
    __extends(DefineIndexFieldCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DefineIndexFieldCommand(input) {
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
    DefineIndexFieldCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "DefineIndexFieldCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DefineIndexFieldRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DefineIndexFieldResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DefineIndexFieldCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDefineIndexFieldCommand(input, context);
    };
    DefineIndexFieldCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDefineIndexFieldCommand(output, context);
    };
    return DefineIndexFieldCommand;
}($Command));
export { DefineIndexFieldCommand };
//# sourceMappingURL=DefineIndexFieldCommand.js.map