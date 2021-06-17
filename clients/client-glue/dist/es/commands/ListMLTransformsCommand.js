import { __extends } from "tslib";
import { ListMLTransformsRequest, ListMLTransformsResponse } from "../models/models_1";
import { deserializeAws_json1_1ListMLTransformsCommand, serializeAws_json1_1ListMLTransformsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Retrieves a sortable, filterable list of existing AWS Glue machine learning transforms in this AWS account,
 *        or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as
 *        a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag
 *        filtering, only resources with the tags are retrieved.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListMLTransformsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListMLTransformsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListMLTransformsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMLTransformsCommandInput} for command's `input` shape.
 * @see {@link ListMLTransformsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMLTransformsCommand = /** @class */ (function (_super) {
    __extends(ListMLTransformsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMLTransformsCommand(input) {
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
    ListMLTransformsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "ListMLTransformsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMLTransformsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMLTransformsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMLTransformsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListMLTransformsCommand(input, context);
    };
    ListMLTransformsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListMLTransformsCommand(output, context);
    };
    return ListMLTransformsCommand;
}($Command));
export { ListMLTransformsCommand };
//# sourceMappingURL=ListMLTransformsCommand.js.map