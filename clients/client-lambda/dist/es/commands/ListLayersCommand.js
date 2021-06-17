import { __extends } from "tslib";
import { ListLayersRequest, ListLayersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListLayersCommand, serializeAws_restJson1ListLayersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers
 *       that indicate that they're compatible with that runtime.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListLayersCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListLayersCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListLayersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLayersCommandInput} for command's `input` shape.
 * @see {@link ListLayersCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLayersCommand = /** @class */ (function (_super) {
    __extends(ListLayersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLayersCommand(input) {
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
    ListLayersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "ListLayersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLayersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLayersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLayersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListLayersCommand(input, context);
    };
    ListLayersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListLayersCommand(output, context);
    };
    return ListLayersCommand;
}($Command));
export { ListLayersCommand };
//# sourceMappingURL=ListLayersCommand.js.map