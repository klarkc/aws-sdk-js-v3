import { __extends } from "tslib";
import { ListModelsRequest, ListModelsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListModelsCommand, serializeAws_restJson1ListModelsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the versions of a model in an Amazon Lookout for Vision project.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:ListModels</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, ListModelsCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, ListModelsCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new ListModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelsCommandInput} for command's `input` shape.
 * @see {@link ListModelsCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListModelsCommand = /** @class */ (function (_super) {
    __extends(ListModelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListModelsCommand(input) {
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
    ListModelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutVisionClient";
        var commandName = "ListModelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListModelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListModelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListModelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListModelsCommand(input, context);
    };
    ListModelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListModelsCommand(output, context);
    };
    return ListModelsCommand;
}($Command));
export { ListModelsCommand };
//# sourceMappingURL=ListModelsCommand.js.map