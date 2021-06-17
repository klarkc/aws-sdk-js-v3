import { __extends } from "tslib";
import { DescribeRepositoryRequest, DescribeRepositoryResult } from "../models/models_0";
import { deserializeAws_restJson1DescribeRepositoryCommand, serializeAws_restJson1DescribeRepositoryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Returns a <code>RepositoryDescription</code> object that contains detailed information
 *         about the requested repository.
 *        </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DescribeRepositoryCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DescribeRepositoryCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DescribeRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRepositoryCommandInput} for command's `input` shape.
 * @see {@link DescribeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRepositoryCommand = /** @class */ (function (_super) {
    __extends(DescribeRepositoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRepositoryCommand(input) {
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
    DescribeRepositoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "DescribeRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRepositoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRepositoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeRepositoryCommand(input, context);
    };
    DescribeRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeRepositoryCommand(output, context);
    };
    return DescribeRepositoryCommand;
}($Command));
export { DescribeRepositoryCommand };
//# sourceMappingURL=DescribeRepositoryCommand.js.map