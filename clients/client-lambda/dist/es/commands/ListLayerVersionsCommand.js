import { __extends } from "tslib";
import { ListLayerVersionsRequest, ListLayerVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListLayerVersionsCommand, serializeAws_restJson1ListLayerVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only
 *       versions that indicate that they're compatible with that runtime.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListLayerVersionsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListLayerVersionsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListLayerVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLayerVersionsCommandInput} for command's `input` shape.
 * @see {@link ListLayerVersionsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLayerVersionsCommand = /** @class */ (function (_super) {
    __extends(ListLayerVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLayerVersionsCommand(input) {
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
    ListLayerVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "ListLayerVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLayerVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLayerVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLayerVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListLayerVersionsCommand(input, context);
    };
    ListLayerVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListLayerVersionsCommand(output, context);
    };
    return ListLayerVersionsCommand;
}($Command));
export { ListLayerVersionsCommand };
//# sourceMappingURL=ListLayerVersionsCommand.js.map