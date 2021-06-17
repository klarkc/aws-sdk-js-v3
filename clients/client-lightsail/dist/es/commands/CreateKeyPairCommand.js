import { __extends } from "tslib";
import { CreateKeyPairRequest, CreateKeyPairResult } from "../models/models_0";
import { deserializeAws_json1_1CreateKeyPairCommand, serializeAws_json1_1CreateKeyPairCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an SSH key pair.</p>
 *          <p>The <code>create key pair</code> operation supports tag-based access control via request
 *       tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateKeyPairCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateKeyPairCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateKeyPairCommandInput} for command's `input` shape.
 * @see {@link CreateKeyPairCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateKeyPairCommand = /** @class */ (function (_super) {
    __extends(CreateKeyPairCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateKeyPairCommand(input) {
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
    CreateKeyPairCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateKeyPairCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateKeyPairRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateKeyPairResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateKeyPairCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateKeyPairCommand(input, context);
    };
    CreateKeyPairCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateKeyPairCommand(output, context);
    };
    return CreateKeyPairCommand;
}($Command));
export { CreateKeyPairCommand };
//# sourceMappingURL=CreateKeyPairCommand.js.map