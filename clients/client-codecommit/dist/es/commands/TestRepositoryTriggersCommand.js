import { __extends } from "tslib";
import { TestRepositoryTriggersInput, TestRepositoryTriggersOutput } from "../models/models_1";
import { deserializeAws_json1_1TestRepositoryTriggersCommand, serializeAws_json1_1TestRepositoryTriggersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Tests the functionality of repository triggers by sending information to the trigger
 *             target. If real data is available in the repository, the test sends data from the last
 *             commit. If no data is available, sample data is generated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, TestRepositoryTriggersCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, TestRepositoryTriggersCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new TestRepositoryTriggersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestRepositoryTriggersCommandInput} for command's `input` shape.
 * @see {@link TestRepositoryTriggersCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TestRepositoryTriggersCommand = /** @class */ (function (_super) {
    __extends(TestRepositoryTriggersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TestRepositoryTriggersCommand(input) {
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
    TestRepositoryTriggersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "TestRepositoryTriggersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TestRepositoryTriggersInput.filterSensitiveLog,
            outputFilterSensitiveLog: TestRepositoryTriggersOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TestRepositoryTriggersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1TestRepositoryTriggersCommand(input, context);
    };
    TestRepositoryTriggersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1TestRepositoryTriggersCommand(output, context);
    };
    return TestRepositoryTriggersCommand;
}($Command));
export { TestRepositoryTriggersCommand };
//# sourceMappingURL=TestRepositoryTriggersCommand.js.map