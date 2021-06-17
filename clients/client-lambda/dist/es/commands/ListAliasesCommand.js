import { __extends } from "tslib";
import { ListAliasesRequest, ListAliasesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAliasesCommand, serializeAws_restJson1ListAliasesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">aliases</a>
 *       for a Lambda function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListAliasesCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListAliasesCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAliasesCommandInput} for command's `input` shape.
 * @see {@link ListAliasesCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAliasesCommand = /** @class */ (function (_super) {
    __extends(ListAliasesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAliasesCommand(input) {
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
    ListAliasesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "ListAliasesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAliasesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAliasesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAliasesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAliasesCommand(input, context);
    };
    ListAliasesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAliasesCommand(output, context);
    };
    return ListAliasesCommand;
}($Command));
export { ListAliasesCommand };
//# sourceMappingURL=ListAliasesCommand.js.map