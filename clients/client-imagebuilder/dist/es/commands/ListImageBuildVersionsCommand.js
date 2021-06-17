import { __extends } from "tslib";
import { ListImageBuildVersionsRequest, ListImageBuildVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListImageBuildVersionsCommand, serializeAws_restJson1ListImageBuildVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns a list of image build versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImageBuildVersionsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImageBuildVersionsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListImageBuildVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImageBuildVersionsCommandInput} for command's `input` shape.
 * @see {@link ListImageBuildVersionsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListImageBuildVersionsCommand = /** @class */ (function (_super) {
    __extends(ListImageBuildVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListImageBuildVersionsCommand(input) {
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
    ListImageBuildVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "ListImageBuildVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListImageBuildVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListImageBuildVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListImageBuildVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListImageBuildVersionsCommand(input, context);
    };
    ListImageBuildVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListImageBuildVersionsCommand(output, context);
    };
    return ListImageBuildVersionsCommand;
}($Command));
export { ListImageBuildVersionsCommand };
//# sourceMappingURL=ListImageBuildVersionsCommand.js.map