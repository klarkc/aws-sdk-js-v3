import { __extends } from "tslib";
import { DescribePullRequestEventsInput, DescribePullRequestEventsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribePullRequestEventsCommand, serializeAws_json1_1DescribePullRequestEventsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about one or more pull request events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DescribePullRequestEventsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DescribePullRequestEventsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DescribePullRequestEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePullRequestEventsCommandInput} for command's `input` shape.
 * @see {@link DescribePullRequestEventsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePullRequestEventsCommand = /** @class */ (function (_super) {
    __extends(DescribePullRequestEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePullRequestEventsCommand(input) {
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
    DescribePullRequestEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "DescribePullRequestEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePullRequestEventsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePullRequestEventsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePullRequestEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePullRequestEventsCommand(input, context);
    };
    DescribePullRequestEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePullRequestEventsCommand(output, context);
    };
    return DescribePullRequestEventsCommand;
}($Command));
export { DescribePullRequestEventsCommand };
//# sourceMappingURL=DescribePullRequestEventsCommand.js.map