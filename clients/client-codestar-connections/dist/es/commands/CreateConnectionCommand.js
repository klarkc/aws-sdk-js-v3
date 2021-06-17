import { __extends } from "tslib";
import { CreateConnectionInput, CreateConnectionOutput } from "../models/models_0";
import { deserializeAws_json1_0CreateConnectionCommand, serializeAws_json1_0CreateConnectionCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a connection that can then be given to other AWS services like CodePipeline so
 *       that it can access third-party code repositories. The connection is in pending status until
 *       the third-party connection handshake is completed from the console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, CreateConnectionCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, CreateConnectionCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new CreateConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateConnectionCommand = /** @class */ (function (_super) {
    __extends(CreateConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateConnectionCommand(input) {
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
    CreateConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarConnectionsClient";
        var commandName = "CreateConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateConnectionInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateConnectionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0CreateConnectionCommand(input, context);
    };
    CreateConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0CreateConnectionCommand(output, context);
    };
    return CreateConnectionCommand;
}($Command));
export { CreateConnectionCommand };
//# sourceMappingURL=CreateConnectionCommand.js.map