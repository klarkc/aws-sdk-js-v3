import { __extends } from "tslib";
import { ListCodeSigningConfigsRequest, ListCodeSigningConfigsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListCodeSigningConfigsCommand, serializeAws_restJson1ListCodeSigningConfigsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code
 *         signing configurations</a>. A request returns up to 10,000 configurations per
 *       call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListCodeSigningConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListCodeSigningConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListCodeSigningConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCodeSigningConfigsCommandInput} for command's `input` shape.
 * @see {@link ListCodeSigningConfigsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCodeSigningConfigsCommand = /** @class */ (function (_super) {
    __extends(ListCodeSigningConfigsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCodeSigningConfigsCommand(input) {
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
    ListCodeSigningConfigsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "ListCodeSigningConfigsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCodeSigningConfigsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCodeSigningConfigsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCodeSigningConfigsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListCodeSigningConfigsCommand(input, context);
    };
    ListCodeSigningConfigsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListCodeSigningConfigsCommand(output, context);
    };
    return ListCodeSigningConfigsCommand;
}($Command));
export { ListCodeSigningConfigsCommand };
//# sourceMappingURL=ListCodeSigningConfigsCommand.js.map