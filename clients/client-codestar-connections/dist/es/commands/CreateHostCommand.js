import { __extends } from "tslib";
import { CreateHostInput, CreateHostOutput } from "../models/models_0";
import { deserializeAws_json1_0CreateHostCommand, serializeAws_json1_0CreateHostCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a resource that represents the infrastructure where a third-party provider is
 *       installed. The host is used when you create connections to an installed third-party provider
 *       type, such as GitHub Enterprise Server. You create one host for all connections to that
 *       provider.</p>
 *          <note>
 *             <p>A host created through the CLI or the SDK is in `PENDING` status by
 *         default. You can make its status `AVAILABLE` by setting up the host in the console.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, CreateHostCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, CreateHostCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new CreateHostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHostCommandInput} for command's `input` shape.
 * @see {@link CreateHostCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateHostCommand = /** @class */ (function (_super) {
    __extends(CreateHostCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateHostCommand(input) {
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
    CreateHostCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarConnectionsClient";
        var commandName = "CreateHostCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateHostInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateHostOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateHostCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0CreateHostCommand(input, context);
    };
    CreateHostCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0CreateHostCommand(output, context);
    };
    return CreateHostCommand;
}($Command));
export { CreateHostCommand };
//# sourceMappingURL=CreateHostCommand.js.map