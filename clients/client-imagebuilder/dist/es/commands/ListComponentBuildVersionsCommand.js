import { __extends } from "tslib";
import { ListComponentBuildVersionsRequest, ListComponentBuildVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListComponentBuildVersionsCommand, serializeAws_restJson1ListComponentBuildVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns the list of component build versions for the specified semantic version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListComponentBuildVersionsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListComponentBuildVersionsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListComponentBuildVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComponentBuildVersionsCommandInput} for command's `input` shape.
 * @see {@link ListComponentBuildVersionsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListComponentBuildVersionsCommand = /** @class */ (function (_super) {
    __extends(ListComponentBuildVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListComponentBuildVersionsCommand(input) {
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
    ListComponentBuildVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "ListComponentBuildVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListComponentBuildVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListComponentBuildVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListComponentBuildVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListComponentBuildVersionsCommand(input, context);
    };
    ListComponentBuildVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListComponentBuildVersionsCommand(output, context);
    };
    return ListComponentBuildVersionsCommand;
}($Command));
export { ListComponentBuildVersionsCommand };
//# sourceMappingURL=ListComponentBuildVersionsCommand.js.map