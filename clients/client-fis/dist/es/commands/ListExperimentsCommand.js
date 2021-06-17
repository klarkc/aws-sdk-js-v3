import { __extends } from "tslib";
import { ListExperimentsRequest, ListExperimentsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListExperimentsCommand, serializeAws_restJson1ListExperimentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists your experiments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListExperimentsCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListExperimentsCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new ListExperimentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExperimentsCommandInput} for command's `input` shape.
 * @see {@link ListExperimentsCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListExperimentsCommand = /** @class */ (function (_super) {
    __extends(ListExperimentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListExperimentsCommand(input) {
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
    ListExperimentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FisClient";
        var commandName = "ListExperimentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListExperimentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListExperimentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListExperimentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListExperimentsCommand(input, context);
    };
    ListExperimentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListExperimentsCommand(output, context);
    };
    return ListExperimentsCommand;
}($Command));
export { ListExperimentsCommand };
//# sourceMappingURL=ListExperimentsCommand.js.map