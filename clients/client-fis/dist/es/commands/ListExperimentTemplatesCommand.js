import { __extends } from "tslib";
import { ListExperimentTemplatesRequest, ListExperimentTemplatesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListExperimentTemplatesCommand, serializeAws_restJson1ListExperimentTemplatesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists your experiment templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListExperimentTemplatesCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListExperimentTemplatesCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new ListExperimentTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExperimentTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListExperimentTemplatesCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListExperimentTemplatesCommand = /** @class */ (function (_super) {
    __extends(ListExperimentTemplatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListExperimentTemplatesCommand(input) {
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
    ListExperimentTemplatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FisClient";
        var commandName = "ListExperimentTemplatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListExperimentTemplatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListExperimentTemplatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListExperimentTemplatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListExperimentTemplatesCommand(input, context);
    };
    ListExperimentTemplatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListExperimentTemplatesCommand(output, context);
    };
    return ListExperimentTemplatesCommand;
}($Command));
export { ListExperimentTemplatesCommand };
//# sourceMappingURL=ListExperimentTemplatesCommand.js.map